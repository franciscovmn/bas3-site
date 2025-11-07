import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// --- IMPORTANTE: MUDE ISSO ---
// Este email DEVE ser um "Verified Sender" na sua conta SendGrid.
const EMAIL_FROM = "bas3automacao@gmail.com"; 
// ------------------------------

const EMAIL_TO = "bas3automacao@gmail.com";
const FROM_NAME = "BAS3 Demo Request";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Trata a requisição CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // 1. Pega a Chave de API dos Secrets
    const SENDGRID_API_KEY = Deno.env.get('SENDGRID_API_KEY');
    if (!SENDGRID_API_KEY) {
      throw new Error('Variável de ambiente SENDGRID_API_KEY não configurada.');
    }

    // 2. Pega os dados do formulário enviados pelo frontend (DemoDialog.tsx)
    const { name, email, company, phone, problem } = await req.json();

    // 3. Cria o corpo do email em HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Nova Solicitação de Demonstração - BAS3</h2>
        <p>Uma nova solicitação de demonstração foi preenchida no site.</p>
        <hr>
        <h3>Detalhes do Lead:</h3>
        <ul>
          <li><strong>Nome:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Empresa:</strong> ${company}</li>
          <li><strong>Telefone:</strong> ${phone || 'Não informado'}</li>
        </ul>
        <h3>Principal Desafio/Necessidade:</h3>
        <p style="padding: 10px; background-color: #f4f4f4; border-radius: 5px;">
          ${problem.replace(/\n/g, '<br>')}
        </p>
      </div>
    `;

    // 4. Monta o payload específico da API v3 do SendGrid
    const sendgridPayload = {
      personalizations: [
        {
          to: [{ email: EMAIL_TO }],
        }
      ],
      from: { email: EMAIL_FROM, name: FROM_NAME },
      // O "reply_to" faz com que, ao clicar em "Responder",
      // a resposta vá para o email do usuário que preencheu o formulário.
      reply_to: { email: email, name: name }, 
      subject: `Nova Demo Agendada - ${company}`,
      content: [
        {
          type: 'text/html',
          value: emailHtml,
        }
      ],
    };

    // 5. Envia a requisição para a API do SendGrid
    const sgResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendgridPayload),
    });

    // 6. Trata a resposta do SendGrid
    if (!sgResponse.ok) {
      // Se der erro, loga o erro do SendGrid para debug
      const errorBody = await sgResponse.text();
      console.error('Erro do SendGrid:', sgResponse.status, errorBody);
      throw new Error('Falha ao enviar o email via SendGrid.');
    }

    // 7. Retorna sucesso para o frontend
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('Erro na função send-demo-email:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
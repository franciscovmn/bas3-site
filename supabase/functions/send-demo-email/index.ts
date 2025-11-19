import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// --- CONFIGURAÇÕES ---
const EMAIL_FROM = "contato@somosbas3.com.br"; 
const EMAIL_TO = "contato@somosbas3.com.br"; 
const FROM_NAME = "BAS3 Demo Request";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Trata CORS (permite requisições do navegador)
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // 1. Recupera a chave do Resend
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY não configurada nos Secrets.');
    }

    // 2. Pega dados do formulário
    const formData = await req.json();
    const { name, email, company, phone, problem } = formData;

    // Validação simples
    if (!name || !email || !company || !problem) {
      throw new Error("Dados incompletos.");
    }

    // Validação básica de formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('E-mail inválido.');
    }
    
    // (REMOVIDO: Bloco que salvava no banco de dados e checava duplicidade)

    // 3. Envia Email via Resend (sem dependência de banco)
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>Nova Solicitação de Demo - BAS3</h2>
        <hr>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Telefone:</strong> ${phone || 'N/A'}</p>
        <br>
        <h3>Desafio:</h3>
        <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${problem.replace(/\n/g, '<br>')}</p>
      </div>
    `;

    // 3. Envia notificação interna (para time)
    const internalPayload = {
      from: `${FROM_NAME} <${EMAIL_FROM}>`,
      to: [EMAIL_TO],
      subject: `Nova Demo: ${company}`,
      html: emailHtml,
      reply_to: email,
    };

    const resendResInternal = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(internalPayload),
    });

    if (!resendResInternal.ok) {
      const errText = await resendResInternal.text();
      console.error('Erro Resend (internal):', errText);
      throw new Error('Falha no envio do e-mail interno.');
    }

    // 4. Envia confirmação para o usuário (opcional — não falha a solicitação principal)
    let userEmailSent = false;
    try {
      const userHtml = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>Confirmação de agendamento de demo - BAS3</h2>
          <p>Olá ${name},</p>
          <p>Recebemos sua solicitação de demonstração. Em breve nossa equipe entrará em contato para confirmar data e horário.</p>
          <hr>
          <p><strong>Empresa:</strong> ${company}</p>
          <p><strong>Telefone:</strong> ${phone || 'N/A'}</p>
          <h3>Desafio informado:</h3>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${problem.replace(/\n/g, '<br>')}</p>
          <br>
          <p>Se quiser responder diretamente, responda este e-mail.</p>
        </div>
      `;

      const userPayload = {
        from: `${FROM_NAME} <${EMAIL_FROM}>`,
        to: [email],
        subject: `Confirmação: Recebemos sua solicitação de demo - BAS3`,
        html: userHtml,
        reply_to: EMAIL_TO,
      };

      const resendResUser = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userPayload),
      });

      if (!resendResUser.ok) {
        const errText = await resendResUser.text();
        console.error('Erro Resend (user):', errText);
      } else {
        userEmailSent = true;
      }
    } catch (err) {
      console.error('Erro ao enviar e-mail ao usuário:', err);
    }

    // 5. Sucesso
    return new Response(JSON.stringify({ success: true, userEmailSent }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : String(error);
    return new Response(JSON.stringify({ error: message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
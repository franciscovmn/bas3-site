import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    console.log('Received message:', message);

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `Você é a IA assistente da BAS3, especializada em infraestrutura de IA para empresas.

Informações sobre a BAS3:
- Empresa focada em automação e implementação de IA para empresas
- Oferece análise de processos para automação
- Casos de uso de IA personalizados para cada negócio
- Demonstrações técnicas e orçamentos personalizados
- Consultoria especializada

Seu comportamento:
- Seja profissional, prestativo e direto
- Faça perguntas para entender as necessidades do cliente
- Sugira soluções práticas de automação com IA
- Quando apropriado, incentive o agendamento de uma demonstração
- Responda em português brasileiro
- Seja conciso mas informativo
- Use emojis com moderação para humanizar a conversa

Foco nas dores do cliente:
- Processos manuais repetitivos
- Falta de eficiência operacional
- Dificuldade em escalar operações
- Necessidade de reduzir custos
- Aumentar produtividade da equipe`
          },
          {
            role: 'user',
            content: message
          }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response('Desculpe, estamos com muitas requisições no momento. Tente novamente em instantes.', {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'text/plain; charset=utf-8' },
        });
      }
      
      if (response.status === 402) {
        return new Response('Serviço temporariamente indisponível. Entre em contato pelo WhatsApp ou email.', {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'text/plain; charset=utf-8' },
        });
      }
      
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiMessage = data.choices?.[0]?.message?.content || 'Desculpe, não consegui processar sua mensagem.';
    
    console.log('AI response:', aiMessage);

    return new Response(aiMessage, {
      headers: { ...corsHeaders, 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (error) {
    console.error('Chat function error:', error);
    return new Response(
      'Desculpe, ocorreu um erro. Por favor, entre em contato pelo WhatsApp ou email.',
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'text/plain; charset=utf-8' },
      }
    );
  }
});

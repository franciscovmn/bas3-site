import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const PoliticaPrivacidade = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader />
      <main className="flex-1">
        <div className="container px-4 py-12 md:py-20">
          <article className="prose prose-slate mx-auto max-w-3xl dark:prose-invert">
            <h1>Política de Privacidade</h1>
            <p className="text-xl text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>

            <blockquote>
              <strong>Aviso:</strong> Este é um documento modelo. Revise e
              adapte este conteúdo com assessoria jurídica para garantir que
              reflete com precisão suas práticas de coleta e processamento de
              dados.
            </blockquote>

            <h2>1. Introdução</h2>
            <p>
              A BAS3 ("nós", "nosso") está comprometida em proteger sua
              privacidade. Esta Política de Privacidade explica como coletamos,
              usamos, divulgamos e protegemos suas informações quando você visita
              nosso site https://www.odoo.com/pt_BR/app/website, incluindo quaisquer outros formulários
              de mídia, canais de mídia, site móvel ou aplicativo móvel
              relacionados ou conectados a ele (coletivamente, o "Site").
            </p>

            <h2>2. Coleta de Suas Informações</h2>
            <p>
              Coletamos informações pessoais que você nos fornece
              voluntariamente ao solicitar uma demonstração ou ao interagir com
              nosso assistente de IA (ChatBot).
            </p>
            <p>As informações pessoais que coletamos incluem:</p>
            <ul>
              <li>
                <strong>Informações de Contato:</strong> Nome, email, número de
                telefone e nome da empresa (coletados no formulário de "Agendar
                Demonstração").
              </li>
              <li>
                <strong>Informações de Projeto:</strong> Detalhes sobre seus
                desafios e necessidades de negócios (coletados no formulário de
                "Agendar Demonstração").
              </li>
              <li>
                <strong>Dados de Comunicação:</strong> O conteúdo das mensagens
                que você envia através do nosso ChatBot.
              </li>
            </ul>

            <h2>3. Uso de Suas Informações</h2>
            <p>
              Usamos as informações coletadas para:
            </p>
            <ul>
              <li>Entrar em contato com você para agendar demonstrações.</li>
              <li>
                Responder às suas perguntas e fornecer suporte através do
                ChatBot.
              </li>
              <li>
                Entender suas necessidades para personalizar nossas soluções e
                propostas.
              </li>
              <li>Melhorar nosso site e ofertas de serviços.</li>
            </ul>

            <h2>4. Armazenamento e Segurança</h2>
            <p>
              Implementamos medidas de segurança administrativas, técnicas e
              físicas para ajudar a proteger suas informações pessoais. Embora
              tenhamos tomado medidas razoáveis para proteger as informações
              pessoais que você nos fornece, esteja ciente de que nenhuma medida
              de segurança é perfeita ou impenetrável.
            </p>

            <h2>5. Seus Direitos (LGPD)</h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o
              direito de:
            </p>
            <ul>
              <li>Confirmar a existência de tratamento de seus dados.</li>
              <li>Acessar seus dados.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>
                Solicitar a anonimização, bloqueio ou eliminação de dados
                desnecessários.
              </li>
              <li>Solicitar a portabilidade dos seus dados a outro fornecedor.</li>
              <li>
                Solicitar a eliminação dos dados pessoais tratados com o seu
                consentimento.
              </li>
              <li>Obter informação sobre as entidades com as quais compartilhamos
                seus dados.
              </li>
            </ul>

            <h2>6. Cookies</h2>
            <p>
              Podemos usar cookies e outras tecnologias de rastreamento para
              ajudar a personalizar o Site e melhorar sua experiência. Você pode
              revisar e alterar suas configurações de cookies a qualquer momento
              em seu navegador.
            </p>

            <h2>7. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade de tempos em tempos.
              A versão atualizada será indicada por uma data de "Última
              atualização" e a versão atualizada entrará em vigor assim que
              estiver acessível.
            </p>

            <h2>8. Contato</h2>
            <p>
              Se você tiver dúvidas ou comentários sobre esta Política de
              Privacidade, entre em contato conosco pelo email:{" "}
              <strong>bas3automacao@gmail.com</strong>.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
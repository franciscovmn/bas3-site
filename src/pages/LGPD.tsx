import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const LGPD = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader />
      <main className="flex-1">
        <div className="container px-4 py-12 md:py-20">
          <article className="prose prose-slate mx-auto max-w-3xl dark:prose-invert">
            <h1>Seus Direitos (LGPD)</h1>
            <p className="text-xl text-muted-foreground">
              Nosso compromisso com a Lei Geral de Proteção de Dados (LGPD).
            </p>
            
            <blockquote>
              <strong>Aviso:</strong> Este é um documento modelo. Revise e
              adapte este conteúdo com assessoria jurídica.
            </blockquote>

            <h2>O que é a LGPD?</h2>
            <p>
              A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) é a
              legislação brasileira que regula as atividades de tratamento de
              dados pessoais. Na BAS3, levamos sua privacidade a sério e
              cumprimos integralmente esta lei.
            </p>

            <h2>Quais são os seus direitos?</h2>
            <p>
              Como titular dos dados, você possui os seguintes direitos:
            </p>
            <ul>
              <li>
                <strong>Confirmação e Acesso:</strong> Você pode solicitar a
                confirmação da existência de tratamento e o acesso aos seus
                dados.
              </li>
              <li>
                <strong>Correção:</strong> Você pode solicitar a correção de
                dados incompletos, inexatos ou desatualizados.
              </li>
              <li>
                <strong>Anonimização, Bloqueio ou Eliminação:</strong> Você pode
                solicitar a anonimização, bloqueio ou eliminação de dados
                desnecessários, excessivos ou tratados em desconformidade com a
                LGPD.
              </li>
              <li>
                <strong>Portabilidade:</strong> Você pode solicitar a
                portabilidade dos seus dados a outro fornecedor de serviço ou
                produto.
              </li>
              <li>
                <strong>Eliminação:</strong> Você pode solicitar a eliminação
                dos dados pessoais tratados com o seu consentimento.
              </li>
              <li>
                <strong>Informação de Compartilhamento:</strong> Você pode
                solicitar informação sobre as entidades públicas e privadas com
                as quais compartilhamos seus dados.
              </li>
              <li>
                <strong>Revogação do Consentimento:</strong> Você pode revogar
                seu consentimento a qualquer momento.
              </li>
            </ul>

            <h2>Como Exercer Seus Direitos</h2>
            <p>
              Para exercer qualquer um dos seus direitos, ou se tiver dúvidas
              sobre como seus dados são tratados, entre em contato com nosso
              Encarregado de Proteção de Dados (DPO) através do email:{" "}
              <strong>bas3automacao@gmail.com</strong>.
            </p>
            
            <h2>Mais Informações</h2>
            <p>
              Para detalhes completos sobre quais dados coletamos e como os
              utilizamos, por favor, consulte nossa{" "}
              <Link to="/politica-de-privacidade">
                Política de Privacidade
              </Link>
              .
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LGPD;
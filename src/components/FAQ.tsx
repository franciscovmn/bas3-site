import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para implementar a infraestrutura de IA?",
    answer: "Nosso processo de implementação é otimizado para deploy em dias, não meses. Dependendo da complexidade do projeto, podemos ter sua infraestrutura de IA funcionando em 7-14 dias."
  },
  {
    question: "Preciso ter uma equipe técnica para usar suas soluções?",
    answer: "Não! Nossa infraestrutura é projetada para ser user-friendly. Oferecemos suporte completo 24/7 e treinamento para sua equipe. A manutenção e otimização são gerenciadas por nós."
  },
  {
    question: "Como vocês garantem a segurança dos meus dados?",
    answer: "Segurança é nossa prioridade. Utilizamos criptografia de ponta a ponta, compliance com LGPD, e nossa infraestrutura é hospedada em data centers com certificações internacionais."
  },
  {
    question: "A solução escala conforme minha empresa cresce?",
    answer: "Absolutamente! Nossa infraestrutura é cloud-native e escala automaticamente. Você paga apenas pelo que usa, sem necessidade de investimentos em hardware ou infraestrutura."
  },
  {
    question: "Vocês oferecem integração com sistemas existentes?",
    answer: "Sim! Nossas APIs são flexíveis e se integram facilmente com ERPs, CRMs e outras ferramentas que sua empresa já utiliza. Fazemos toda a integração para você."
  },
  {
    question: "Como funciona o suporte e a manutenção?",
    answer: "Oferecemos suporte 24/7 via chat, email e WhatsApp. Nossa IA monitora constantemente o desempenho do sistema e realiza otimizações proativas para garantir máxima eficiência."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Perguntas <span className="bg-gradient-brand bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo que você precisa saber sobre nossa infraestrutura de IA
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import { Card, CardContent } from "@/components/ui/card";
import { Database, BrainCircuit, Zap } from "lucide-react";

const pillars = [
  {
    title: "A Base de Dados",
    subtitle: "Centralização & Estrutura",
    desc: "Antes da IA, vem a organização. Unificamos dados fragmentados em interfaces limpas e integramos seus sistemas atuais para criar uma única fonte da verdade.",
    icon: Database,
    highlight: "Ex: Integração Total de CRM & ERP",
  },
  {
    title: "A Base de Inteligência",
    subtitle: "Análise & Compreensão",
    desc: "O cérebro da operação. Treinamos modelos que leem seus documentos, analisam contratos e identificam padrões complexos nos seus relatórios gerenciais.",
    icon: BrainCircuit,
    highlight: "Ex: Análise de Padrões & Documentos",
  },
  {
    title: "A Base de Ação",
    subtitle: "Execução Autônoma",
    desc: "Onde o lucro acontece. Agentes digitais que qualificam leads, respondem dúvidas técnicas sobre seus produtos e agendam reuniões 24h por dia.",
    icon: Zap,
    highlight: "Ex: Automação de Vendas & Suporte",
  }
];

const UseCases = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            A metodologia <span className="text-gradient">Bas3.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Não entregamos ferramentas soltas. Construímos um ecossistema completo para resolver a dor do seu negócio, independente do seu setor de atuação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 bg-white shadow-card hover:shadow-glow transition-all duration-500 rounded-2xl cursor-default ring-1 ring-black/5"
            >
              <CardContent className="p-8 flex flex-col h-full">
                {/* Ícone com Brilho da Marca */}
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shadow-sm">
                  <item.icon className="w-7 h-7 text-foreground group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
                  {item.title}
                </h3>
                <span className="text-sm font-semibold text-brand-orange mb-5 block uppercase tracking-wide opacity-90">
                  {item.subtitle}
                </span>
                
                <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-1 border-b border-dashed border-gray-200 pb-6">
                  {item.desc}
                </p>

                {/* Destaque Universal */}
                <div className="bg-secondary/50 rounded-lg p-3 flex items-center gap-3 text-sm font-medium text-foreground/80 group-hover:bg-brand-orange/5 group-hover:text-brand-orange transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  {item.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
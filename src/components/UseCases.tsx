import { Bot, FileText, Headphones, TrendingUp, Shield, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";

const useCases = [
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Atendimento automatizado 24/7 que entende contexto e resolve problemas complexos."
  },
  {
    icon: FileText,
    title: "Análise de Documentos",
    description: "Processamento automático de contratos, notas fiscais e documentos empresariais."
  },
  {
    icon: Headphones,
    title: "Suporte ao Cliente",
    description: "IA que aprende com cada interação e melhora continuamente a experiência."
  },
  {
    icon: TrendingUp,
    title: "Análise Preditiva",
    description: "Previsões precisas de vendas, demanda e tendências de mercado."
  },
  {
    icon: Shield,
    title: "Segurança & Compliance",
    description: "Monitoramento inteligente e detecção de anomalias em tempo real."
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description: "Workflows inteligentes que eliminam tarefas repetitivas e erros humanos."
  }
];

const UseCases = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Casos de <span className="bg-gradient-brand bg-clip-text text-transparent">Uso</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções de IA adaptadas para cada área do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 group cursor-pointer border-border hover:border-accent/50"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <useCase.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

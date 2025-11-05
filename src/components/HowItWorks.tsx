import { MessageSquare, Cpu, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Análise de Necessidades",
    description: "Nossa IA analisa seus processos e identifica oportunidades de automação e otimização."
  },
  {
    icon: Cpu,
    title: "2. Infraestrutura Personalizada",
    description: "Desenvolvemos e implementamos soluções de IA sob medida para sua empresa."
  },
  {
    icon: Rocket,
    title: "3. Integração Rápida",
    description: "Deploy em dias, não meses. Sua infraestrutura de IA pronta para escalar."
  },
  {
    icon: BarChart,
    title: "4. Monitoramento Contínuo",
    description: "Acompanhamento 24/7 com otimização constante e suporte dedicado."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Como <span className="bg-gradient-brand bg-clip-text text-transparent">Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Do diagnóstico à implementação, tornamos a IA acessível e eficiente para sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow">
                <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

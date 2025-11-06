import { Zap, Shield, Boxes, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Deploy Instantâneo",
    description: "Configure e implante modelos de IA em semanas. Nossa plataforma automatiza todo o processo."
  },
  {
    icon: Shield,
    title: "Segurança Enterprise",
    description: "Criptografia end-to-end, compliance com LGPD e ISO 27001. Seus dados protegidos com padrões militares."
  },
  {
    icon: Boxes,
    title: "Escalabilidade Automática",
    description: "Infraestrutura que cresce com sua demanda. De 10 a 10 milhões de requisições sem configuração manual."
  },
  {
    icon: Cpu,
    title: "Multi-Model Support",
    description: "Suporte para GPT, Claude, Gemini, Llama e modelos customizados. Uma API para todos os modelos."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Infraestrutura que
            <span className="bg-gradient-brand bg-clip-text text-transparent"> Impulsiona Inovação</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Construída para empresas que não podem esperar. Nossa infraestrutura elimina barreiras técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="flex flex-col h-full space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

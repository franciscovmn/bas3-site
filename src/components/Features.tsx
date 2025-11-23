import { Brain, Cpu, LineChart, Lock, Zap, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  { title: "IA Proprietária", desc: "Modelos treinados exclusivamente nos seus dados.", icon: Brain },
  { title: "Segurança Enterprise", desc: "Criptografia militar e conformidade LGPD total.", icon: Lock },
  { title: "Escala Infinita", desc: "Infraestrutura que aguenta picos de qualquer tamanho.", icon: Rocket },
  { title: "Analytics Preditivo", desc: "Dashboard que prevê o futuro, não só mostra o passado.", icon: LineChart },
  { title: "Integração ERP", desc: "Conectamos com SAP, Totvs, Salesforce e outros.", icon: Cpu },
  { title: "Automação Total", desc: "Substitua tarefas manuais por agentes autônomos.", icon: Zap },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Fundo sutil para diferenciar levemente */}
      <div className="absolute inset-0 bg-white/40 -z-10 skew-y-3 transform origin-top-left scale-110" />

      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Tecnologia <span className="text-gradient">Alien.</span> <br/>
            Controle Humano.
          </h2>
          <p className="text-muted-foreground text-lg">
            A maioria das ferramentas de IA são caixas pretas. A Bas3 é transparente, segura e desenhada para líderes que exigem governança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-glow hover:bg-white transition-all duration-500 group rounded-2xl"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-foreground/5">
                  <feature.icon className="w-6 h-6 text-foreground group-hover:text-brand-orange transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
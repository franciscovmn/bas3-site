import { Brain, Cpu, LineChart, Lock, Zap, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  { title: "IA Proprietária", desc: "Modelos treinados exclusivamente nos seus dados, sem vazamento.", icon: Brain },
  { title: "Segurança Enterprise", desc: "Criptografia de ponta a ponta e conformidade LGPD.", icon: Lock },
  { title: "Escala Infinita", desc: "Infraestrutura robusta preparada para milhões de requisições.", icon: Rocket },
  { title: "Analytics Preditivo", desc: "Não olhe apenas o passado. Preveja tendências futuras.", icon: LineChart },
  { title: "Integração Universal", desc: "Conecta com seu ERP, CRM, Banco de Dados e Planilhas.", icon: Cpu },
  { title: "Automação 24/7", desc: "Agentes que trabalham enquanto sua equipe descansa.", icon: Zap },
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Tecnologia que <span className="text-gradient">lidera o mercado.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Diferenciais técnicos que separam a Bas3 de ferramentas genéricas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-glow hover:bg-white transition-all duration-500 group rounded-2xl ring-1 ring-black/5"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-black/5 shadow-sm">
                  <feature.icon className="w-6 h-6 text-foreground group-hover:text-brand-orange transition-colors" />
                </div>
                <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">
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
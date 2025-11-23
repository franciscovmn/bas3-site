import { useState, useEffect } from "react";
import { User, Check, Database, DollarSign, Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const DataPipeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Ciclo da animação (Loop Infinito)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4); // 4 estados: 0 (Reset), 1 (Msg), 2 (Travel), 3 (Data)
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Grid de Fundo Tecnológico */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            O <span className="text-gradient">motor invisível</span> da sua operação.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transformamos conversas desestruturadas em linhas de banco de dados acionáveis, sem intervenção humana.
          </p>
        </div>

        {/* O PALCO DA ANIMAÇÃO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          
          {/* LADO ESQUERDO: O CAOS (Chat) */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-brand opacity-20 blur-xl rounded-full" />
            <Card className="bg-white border-border shadow-xl p-6 relative h-[280px] flex flex-col justify-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent animate-[shimmer_2s_infinite]" />
              
              {/* Mensagem Simulada */}
              <div className={cn(
                "transition-all duration-500 ease-out transform",
                activeStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none text-sm text-foreground leading-relaxed shadow-sm">
                    <p>Olá! Gostaria de agendar uma visita para ver o <span className="font-bold text-brand-orange">Imóvel Centro</span> amanhã às <span className="font-bold text-brand-orange">14h</span>.</p>
                  </div>
                </div>
              </div>

              {/* Scanner Effect */}
              <div className={cn(
                "absolute left-0 right-0 h-px bg-brand-orange/50 shadow-[0_0_15px_rgba(255,100,0,0.8)] transition-all duration-1000",
                activeStep === 2 ? "top-[60%] opacity-100" : "top-[40%] opacity-0"
              )} />
            </Card>
            <p className="text-center mt-4 text-sm font-semibold text-muted-foreground">INPUT: WhatsApp / Email</p>
          </div>

          {/* MEIO: A MÁQUINA (Conexão Animada) */}
          <div className="hidden lg:flex flex-col items-center justify-center relative h-[200px]">
            {/* O "Cabo" */}
            <div className="w-full h-2 bg-secondary rounded-full relative overflow-hidden">
              {/* A Energia (Cobrinha) */}
              <div className={cn(
                "absolute top-0 left-0 h-full w-1/3 bg-gradient-brand rounded-full shadow-[0_0_20px_#ff6b00]",
                activeStep === 2 ? "animate-[slideRight_1s_ease-in-out_forwards]" : "opacity-0 -translate-x-full"
              )} />
            </div>
            
            {/* Ícone Central Pulsante */}
            <div className="absolute bg-background p-4 rounded-full border-2 border-brand-orange shadow-glow z-10">
               <ArrowRight className={cn(
                 "w-6 h-6 text-brand-orange transition-transform duration-500",
                 activeStep === 2 ? "scale-125" : "scale-100"
               )} />
            </div>
          </div>

          {/* Versão Mobile da Seta (Vertical) */}
          <div className="lg:hidden flex justify-center py-4">
             <ArrowRight className="w-8 h-8 text-muted-foreground rotate-90" />
          </div>

          {/* LADO DIREITO: A ORDEM (CRM/Dashboard) */}
          <div className="relative">
             <div className="absolute -inset-1 bg-blue-500/10 blur-xl rounded-full" />
             <Card className="bg-background border-border shadow-2xl p-0 overflow-hidden h-[280px] flex flex-col relative ring-1 ring-black/5">
                {/* Header Fake do CRM */}
                <div className="bg-secondary border-b border-border p-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground">Bas3 CRM v2.0</span>
                </div>

                {/* Linhas de Dados */}
                <div className="p-5 space-y-4">
                  
                  {/* Campo 1: Interesse */}
                  <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-transparent transition-all duration-500">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-md"><DollarSign className="w-4 h-4" /></div>
                      <div>
                        <p className="text-[10px] uppercase text-muted-foreground font-bold">Interesse</p>
                        <p className="text-sm font-medium">Imóvel Centro</p>
                      </div>
                    </div>
                    <Check className={cn(
                      "w-5 h-5 text-green-500 transition-all duration-300 delay-100",
                      activeStep >= 3 ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    )} />
                  </div>

                  {/* Campo 2: Data/Hora */}
                  <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-transparent transition-all duration-500">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 text-purple-600 rounded-md"><Calendar className="w-4 h-4" /></div>
                      <div>
                        <p className="text-[10px] uppercase text-muted-foreground font-bold">Agendamento</p>
                        <p className="text-sm font-medium">Amanhã, 14:00</p>
                      </div>
                    </div>
                    <Check className={cn(
                      "w-5 h-5 text-green-500 transition-all duration-300 delay-300",
                      activeStep >= 3 ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    )} />
                  </div>

                  {/* Status Tag */}
                  <div className={cn(
                    "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200 transition-all duration-500 delay-500",
                    activeStep >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  )}>
                    <Database className="w-3 h-3 mr-1" />
                    Lead Salvo no CRM
                  </div>

                </div>
             </Card>
             <p className="text-center mt-4 text-sm font-semibold text-muted-foreground">OUTPUT: CRM / Banco de Dados</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DataPipeline;
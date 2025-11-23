import { useState, useEffect } from "react";
import { MessageSquare, CheckCircle2, ArrowRight, Database, User, DollarSign, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const TransformationSection = () => {
  const [step, setStep] = useState<"chat" | "processing" | "crm">("chat");

  // Ciclo de animação automática
  useEffect(() => {
    const cycle = () => {
      setStep("chat");
      setTimeout(() => setStep("processing"), 3000); // 3s lendo o chat
      setTimeout(() => setStep("crm"), 4500);        // 1.5s processando
      setTimeout(cycle, 9000);                         // 4.5s mostrando o CRM e reinicia
    };
    cycle();
    // Nota: Em produção, usaríamos um requestAnimationFrame ou limparíamos o timeout, 
    // mas para demo simples isso funciona bem.
    return () => {}; 
  }, []);

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Do Caos à <span className="text-gradient">Clareza.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja como a Bas3 transforma interações desestruturadas em dados estratégicos em tempo real.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[400px] flex items-center justify-center">
          
          {/* ==================== ESTÁGIO 1: WHATSAPP (O Caos) ==================== */}
          <div 
            className={cn(
              "absolute transition-all duration-700 ease-in-out transform w-full max-w-md",
              step === "chat" ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 -translate-x-20 pointer-events-none"
            )}
          >
            <Card className="bg-[#e5ddd5] dark:bg-zinc-900 border-0 shadow-2xl overflow-hidden h-[320px] flex flex-col relative">
              {/* Header do "Zap" */}
              <div className="bg-[#075e54] p-4 flex items-center gap-3 text-white shadow-sm">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><User className="w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-sm">Lead Potencial</p>
                  <p className="text-xs opacity-80">Online agora</p>
                </div>
              </div>
              
              {/* Mensagens */}
              <div className="p-4 space-y-4 flex-1 overflow-hidden font-sans text-sm">
                <div className="bg-white p-3 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-sm max-w-[85%] self-start text-zinc-800">
                  Olá, vi o anúncio do produto X. Quanto custa? Vocês entregam em SP?
                  <span className="text-[10px] text-zinc-400 block text-right mt-1">10:42</span>
                </div>
                
                {/* A "Mãozinha" digitando (Simulação) */}
                <div className="bg-[#dcf8c6] p-3 rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-sm max-w-[85%] ml-auto text-zinc-800">
                  Olá! Claro, entregamos sim. O valor é R$ 299,00.
                  <span className="text-[10px] text-zinc-400 block text-right mt-1">10:45 <CheckCircle2 className="w-3 h-3 inline text-blue-500 ml-1"/></span>
                </div>
              </div>

              {/* Efeito de Scanner (A "Cobrinha" Tecnológica) */}
              {step === "processing" && (
                <div className="absolute inset-0 bg-brand-orange/10 backdrop-blur-[1px] z-10 flex items-center justify-center border-2 border-brand-orange rounded-lg animate-pulse">
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange shadow-[0_0_20px_rgba(255,100,0,0.5)] animate-[scan_1.5s_ease-in-out_infinite]" />
                  <div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-orange animate-spin" />
                    <span className="text-sm font-bold text-brand-orange">Bas3 AI Analisando...</span>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Seta de Transformação (Aparece no meio) */}
          <div className={cn(
            "hidden md:flex z-0 transition-all duration-500",
            step === "processing" ? "opacity-100 scale-110 text-brand-orange" : "opacity-20 scale-100 text-muted-foreground"
          )}>
            <ArrowRight className="w-12 h-12" />
          </div>

          {/* ==================== ESTÁGIO 2: CRM / BI (A Ordem) ==================== */}
          <div 
            className={cn(
              "absolute transition-all duration-700 ease-in-out transform w-full max-w-md",
              step === "crm" ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-20 pointer-events-none"
            )}
          >
            <Card className="bg-white border border-border shadow-2xl overflow-hidden h-[320px] flex flex-col">
              {/* Header do Sistema */}
              <div className="bg-foreground p-4 flex items-center justify-between text-white shadow-sm">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-brand-orange" />
                  <span className="font-bold text-sm">Bas3 CRM</span>
                </div>
                <span className="text-[10px] bg-brand-orange/20 text-brand-orange px-2 py-1 rounded-full border border-brand-orange/30">Auto-Created</span>
              </div>

              {/* Conteúdo Estruturado */}
              <div className="p-6 space-y-6">
                {/* Lead Score */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Status do Lead</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-bold text-foreground">Altamente Qualificado</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase font-bold">Intenção de Compra</p>
                    <span className="text-xl font-bold text-brand-orange">92%</span>
                  </div>
                </div>

                {/* Dados Extraídos */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/50 p-3 rounded-lg border border-border/50">
                    <div className="flex items-center gap-2 mb-1 text-muted-foreground">
                        <User className="w-3 h-3" />
                        <span className="text-[10px] uppercase font-bold">Nome / Origem</span>
                    </div>
                    <p className="font-semibold text-sm">Lead WhatsApp (SP)</p>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg border border-border/50">
                    <div className="flex items-center gap-2 mb-1 text-muted-foreground">
                        <DollarSign className="w-3 h-3" />
                        <span className="text-[10px] uppercase font-bold">Interesse</span>
                    </div>
                    <p className="font-semibold text-sm">Produto X (R$ 299)</p>
                  </div>
                </div>

                {/* Ação Automática */}
                <div className="bg-brand-orange/5 border border-brand-orange/20 p-3 rounded-lg flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                    <div>
                        <p className="text-xs font-bold text-brand-orange">Ação Executada</p>
                        <p className="text-xs text-muted-foreground">Link de pagamento enviado automaticamente.</p>
                    </div>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
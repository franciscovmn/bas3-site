import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTASectionProps {
  onOpenChat: () => void;
}

const CTASection = ({ onOpenChat }: CTASectionProps) => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-brand opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-brand/10 border border-accent/20">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Comece Sua Transformação Digital</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Pronto para Revolucionar <br />
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Seu Negócio com IA?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossa IA está disponível 24/7 para responder suas dúvidas, analisar suas necessidades 
            e apresentar soluções personalizadas. Comece agora mesmo!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={onOpenChat}
              className="bg-gradient-brand hover:opacity-90 text-white border-0 shadow-glow text-base px-8 py-6 h-auto group"
            >
              Falar com Nossa IA
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="https://wa.me/5583993869595" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-foreground hover:bg-accent/10 text-base px-8 py-6 h-auto"
              >
                WhatsApp Direto
              </Button>
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            ✨ Sem compromisso • Respostas instantâneas • Consultoria gratuita
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

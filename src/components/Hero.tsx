import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import logoBlack from "@/assets/logo-black.png";

interface HeroProps {
  onOpenChat: () => void;
}

const Hero = ({ onOpenChat }: HeroProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted -z-10" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-brand opacity-20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-brand opacity-10 blur-3xl rounded-full animate-pulse delay-1000" />

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img 
            src={logoBlack} 
            alt="BAS3 AI" 
            className="h-16 md:h-20 w-auto"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up">
          Infraestrutura de IA
          <br />
          <span className="bg-gradient-brand bg-clip-text text-transparent">
            Pronta para Escalar
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-200">
          Transforme sua empresa com infraestrutura de inteligência artificial de ponta. 
          Escalável, segura e pronta para o futuro.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up animation-delay-400">
          <Button 
            size="lg" 
            onClick={onOpenChat}
            className="bg-gradient-brand hover:opacity-90 text-white border-0 shadow-glow transition-all duration-300 hover:scale-105 text-base md:text-lg px-8 py-6 group"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Fale com nossa IA
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in animation-delay-600">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">
              99.9%
            </div>
            <div className="text-sm text-muted-foreground">
              Uptime garantido
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">
              &lt;100ms
            </div>
            <div className="text-sm text-muted-foreground">
              Latência média
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">
              Suporte dedicado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Brain, Rocket } from "lucide-react";
import logo from "@/assets/logo-black.png";

interface HeroProps {
  onOpenChat: () => void;
  onOpenDemo: () => void;
}

const Hero = ({ onOpenChat, onOpenDemo }: HeroProps) => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-pulse animation-delay-400" />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="animate-fade-in">
            <img 
              src={logo} 
              alt="BAS3 Logo" 
              className="h-20 md:h-32 mx-auto mb-8 drop-shadow-glow"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-brand/10 border border-accent/20 animate-fade-in animation-delay-200">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              Infraestrutura de IA de Última Geração
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-400">
            Transforme sua Empresa com{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-600">
            Fornecemos infraestrutura completa de IA para empresas que querem liderar o futuro. 
            Automatize processos, tome decisões inteligentes e escale sem limites.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-600">
            <Button
              size="lg"
              onClick={onOpenChat}
              className="bg-gradient-brand hover:opacity-90 text-white border-0 shadow-glow text-base px-8 py-6 h-auto group"
            >
              <Brain className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Converse com Nossa IA
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onOpenDemo}
              className="border-accent text-foreground hover:bg-accent/10 text-base px-8 py-6 h-auto"
            >
              Agendar Demonstração
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto pt-12 animate-fade-in animation-delay-600">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl md:text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">99.9%</div>
              <p className="text-sm text-muted-foreground mt-1">Uptime</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl md:text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">24/7</div>
              <p className="text-sm text-muted-foreground mt-1">Suporte IA</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Rocket className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl md:text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">10x</div>
              <p className="text-sm text-muted-foreground mt-1">Mais Rápido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

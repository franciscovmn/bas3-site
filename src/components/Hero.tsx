import { ArrowRight, PlayCircle, Activity, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import DemoDialog from "./DemoDialog";

const Hero = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 150);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToMethodology = () => {
    document.querySelector('#methodology')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // AJUSTE 1: Aumentei o pt (padding-top) de 20 para 32 no mobile.
    // Isso cria um respiro maior no topo para não ficar "colado".
    <div className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 pb-10 lg:pt-20">
      
      {/* Fundo com Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[700px] bg-brand-orange/10 rounded-[100%] blur-[120px] -z-10 opacity-50 pointer-events-none mix-blend-multiply" />

      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center justify-center h-full">
        
        {/* AJUSTE 2: Texto atualizado e sem CAPS LOCK excessivo */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md px-4 py-2 mb-6 border border-brand-orange/20 shadow-sm animate-fade-up [animation-delay:0ms] hover:scale-105 transition-transform cursor-default">
          <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-sm font-semibold text-foreground/80 tracking-wide">
            Ecossistema de Performance
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-5xl text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter text-foreground mb-6 animate-fade-up [animation-delay:200ms] leading-[1.0]">
          Sua operação em <br className="hidden sm:block" />
          <span className="text-gradient">escala máxima.</span>
        </h1>

        {/* Subtítulo */}
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-up [animation-delay:400ms]">
          Eliminamos a complexidade do seu negócio criando ecossistemas de IA sob medida. Previsibilidade, automação e controle total.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-up [animation-delay:600ms] w-full sm:w-auto">
          <Button 
            size="lg" 
            className="h-14 px-10 rounded-full text-base bg-gradient-brand text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl shadow-brand-orange/20 min-w-[220px] font-bold border-0 w-full sm:w-auto"
            onClick={() => setIsDemoOpen(true)}
          >
            Iniciar Consultoria
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="h-14 px-10 rounded-full text-base bg-background/40 backdrop-blur-sm border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 min-w-[220px] font-semibold w-full sm:w-auto"
            onClick={scrollToMethodology}
          >
            <PlayCircle className="mr-2 h-5 w-5" />
            Nossa Metodologia
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-8 opacity-0 animate-fade-up [animation-delay:800ms] fill-mode-forwards border-b border-foreground/5 mx-auto max-w-5xl pb-8">
            {/* Card 1 */}
            <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/60 border border-gray-200/50 shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <div className="p-2 bg-brand-orange/10 rounded-xl text-brand-orange">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="text-left">
                   <span className="block font-bold text-foreground text-base leading-none mb-1">Alta Performance</span>
                   <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">Infraestrutura</span>
                </div>
            </div>
            
            {/* Card 2 */}
            <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/60 border border-gray-200/50 shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <div className="p-2 bg-brand-orange/10 rounded-xl text-brand-orange">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="text-left">
                   <span className="block font-bold text-foreground text-base leading-none mb-1">Segurança Privada</span>
                   <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">Criptografia</span>
                </div>
            </div>
            
            {/* Card 3 */}
            <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/60 border border-gray-200/50 shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <div className="p-2 bg-brand-orange/10 rounded-xl text-brand-orange">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-left">
                   <span className="block font-bold text-foreground text-base leading-none mb-1">Automação Real</span>
                   <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">24/7 Online</span>
                </div>
            </div>
        </div>
      </div>
      
      {/* Seta de Scroll */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 transition-opacity duration-300"
        style={{ opacity: scrollOpacity }}
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
          
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2 animate-bounce">
            <div className="w-1 h-2 bg-foreground/40 rounded-full" />
        </div>
      </div>

      <DemoDialog isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
};

export default Hero;
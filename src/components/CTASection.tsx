import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DemoDialog from "./DemoDialog";

const CTASection = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Configuração do WhatsApp
  const whatsappNumber = "5583993869595"; 
  const whatsappMessage = encodeURIComponent("Olá! Estou no site da Bas3 e gostaria de tirar algumas dúvidas sobre a consultoria.");

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* FUNDO: Mantém o Creme do site, mas com um degradê sutil para dar profundidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-orange/5 -z-20" />
      
      {/* Elemento Visual de Fundo (O "Glow" da Bas3) - Agora mais sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] -z-10 opacity-40 pointer-events-none" />

      <div className="container px-4 md:px-6 text-center relative z-10">
        
        {/* TÍTULO: Cor Chumbo (#17191a) para legibilidade máxima */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#17191a] mb-8 font-sans leading-tight">
          Pronto para escalar <br className="hidden md:block" />
          sua operação?
        </h2>
        
        {/* SUBTÍTULO: Cinza escuro para contraste */}
        <p className="text-[#17191a]/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Não deixe para depois a eficiência que sua empresa precisa hoje. A tecnologia já existe, só falta implementá-la no seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          
          {/* Botão Principal: Agendar */}
          <Button 
            size="lg" 
            className="h-16 px-10 rounded-full text-lg bg-gradient-brand text-white shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto font-bold border-0"
            onClick={() => setIsDemoOpen(true)}
          >
            Agendar Consultoria
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          {/* Botão Secundário: WhatsApp (Adaptado para fundo claro) */}
          <Button 
            variant="outline" 
            size="lg" 
            className="h-16 px-10 rounded-full text-lg border-[#17191a]/10 bg-white/50 text-[#17191a] hover:bg-white hover:border-brand-orange/30 hover:text-brand-orange backdrop-blur-sm w-full sm:w-auto transition-all font-semibold shadow-sm"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" />
            Chamar no WhatsApp
          </Button>

        </div>

        <p className="mt-10 text-sm text-[#17191a]/50 font-semibold">
          Resposta em até 1 hora comercial • Sem compromisso
        </p>

      </div>

      <DemoDialog isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
};

export default CTASection;
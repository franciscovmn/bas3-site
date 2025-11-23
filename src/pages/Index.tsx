import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ChatBot from "@/components/ChatBot";
import FAQ from "@/components/FAQ";

const Index = () => {
  // Handler to open the chat (passed to CTASection)
  const handleOpenChat = () => {
    // TODO: implement chat opening logic or integrate with ChatBot API
    // For now it's a no-op to satisfy the prop requirement
  };

  return (
    <div className="min-h-screen bg-background selection:bg-brand-orange/20 selection:text-brand-black">
      <Header />
      
      <main>
        <Hero />
        {/* Inverti a ordem: Primeiro mostramos CASOS DE USO (Resultados) para gerar desejo */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
          <UseCases />
        </div>

        {/* Depois explicamos COMO a tecnologia (Features) entrega esses resultados */}
        <Features />

        {/* Explicamos o PROCESSO (Passa segurança de que não somos amadores) */}
        <div id="methodology">
          <HowItWorks />
        </div>

        <FAQ />
        
        <CTASection onOpenChat={handleOpenChat} />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
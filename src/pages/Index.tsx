import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import Features from "@/components/Features"; // Importante: Trazer de volta
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ChatBot from "@/components/ChatBot";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-orange/20 selection:text-brand-black">
      <Header />
      
      <main>
        <Hero />
        
        {/* Animação */}

        {/* Seção: ATUAÇÃO (Pilares) */}
        <div id="atuacao">
          <UseCases />
        </div>

        {/* Seção: DIFERENCIAIS (Tecnologia) - Trazida de volta */}
        <div id="diferenciais">
          <Features />
        </div>
        
        {/* Seção: METODOLOGIA */}
        <div id="methodology">
          <HowItWorks />
        </div>

        <div id="faq">
          <FAQ />
        </div>
        
        <div id="contato">
          <CTASection />
        </div>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
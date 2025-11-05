import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import FloatingChatButton from "@/components/FloatingChatButton";
import DemoDialog from "@/components/DemoDialog";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Hero 
        onOpenChat={() => setIsChatOpen(true)} 
        onOpenDemo={() => setIsDemoOpen(true)}
      />
      <Features />
      <HowItWorks />
      <UseCases />
      <FAQ />
      <CTASection onOpenChat={() => setIsChatOpen(true)} />
      <Contact />
      <Footer />
      
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <DemoDialog isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      
      {!isChatOpen && <FloatingChatButton onClick={() => setIsChatOpen(true)} />}
    </div>
  );
};

export default Index;

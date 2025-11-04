import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import ChatBot from "@/components/ChatBot";
import FloatingChatButton from "@/components/FloatingChatButton";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Hero onOpenChat={() => setIsChatOpen(true)} />
      <Features />
      <Contact />
      
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      
      {!isChatOpen && <FloatingChatButton onClick={() => setIsChatOpen(true)} />}
    </div>
  );
};

export default Index;

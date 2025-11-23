import { useState, useRef, useEffect } from "react";
import { Send, Bot, RefreshCcw, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import FloatingChatButton from "./FloatingChatButton";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const STARTER_QUESTIONS = [
  "Como a IA funciona?",
  "Quero ver uma demo",
  "Preços e Planos",
  "Falar com humano"
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Sou a inteligência da Bas3. Como posso ajudar a otimizar sua empresa hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Refs para controle de scroll e foco
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();

  // ROLAGEM AUTOMÁTICA: Sempre que 'messages' mudar, rola para o fim
  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      scrollContainer.scrollTo({
        top: scrollContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isOpen]);

  // Foco automático no desktop
  useEffect(() => {
    if (isOpen && !isMobile) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, isMobile]);

  const handleSend = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = { role: "user" as const, content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulação de resposta (Substituir por chamada real à API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Entendi! Nossa tecnologia personaliza soluções de IA especificamente para esse cenário. Gostaria de ver um caso de uso similar?",
        },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      <div
        className={cn(
          "fixed z-[100] transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)",
          // MOBILE: Ocupa tela cheia, mas com margem segura
          isMobile 
            ? "inset-0 bg-background/80 backdrop-blur-sm flex flex-col justify-end" 
            : "bottom-24 right-6 w-[380px]",
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto scale-100"
            : "translate-y-10 opacity-0 pointer-events-none scale-95",
        )}
      >
        <Card className={cn(
          "border shadow-card overflow-hidden flex flex-col bg-background relative",
          isMobile ? "h-[100dvh] w-full rounded-none border-0" : "h-[600px] max-h-[80vh] rounded-2xl"
        )}>
          
          {/* CABEÇALHO COM IDENTIDADE BAS3 */}
          <div className="relative bg-gradient-brand p-4 shrink-0 shadow-md">
             {/* Botão de fechar no mobile */}
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="absolute right-2 top-2 text-white hover:bg-white/20 rounded-full z-10"
              >
                <ChevronDown className="w-6 h-6" />
              </Button>
            )}

            <div className="relative flex items-center gap-3 pt-2 md:pt-0">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md border border-white/10 shadow-sm">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg leading-tight font-sans">Bas3 AI</h3>
                <p className="text-white/90 text-xs flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                  </span>
                  Online agora
                </p>
              </div>
              
              {/* Botão de Reset (Desktop) */}
              {!isMobile && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="ml-auto text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                  onClick={() => setMessages([{role: 'assistant', content: 'Olá! Sou a inteligência da Bas3. Como posso ajudar a otimizar sua empresa hoje?'}])}
                  title="Reiniciar conversa"
                >
                  <RefreshCcw className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          {/* ÁREA DE MENSAGENS (SCROLLÁVEL) */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-6 bg-secondary/30 scroll-smooth"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  "flex w-full animate-fade-in",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] px-4 py-3 text-sm shadow-sm relative group font-sans leading-relaxed",
                    msg.role === "user"
                      ? "bg-gradient-brand text-white rounded-2xl rounded-tr-sm" // Identidade Visual Bas3
                      : "bg-white dark:bg-card text-foreground border border-border/50 rounded-2xl rounded-tl-sm"
                  )}
                >
                  {msg.role === 'assistant' && (
                    <Sparkles className="w-3 h-3 text-brand-orange absolute -top-4 -left-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Indicador de Digitação */}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white dark:bg-card border border-border px-4 py-4 rounded-2xl rounded-tl-sm shadow-sm flex gap-1 items-center">
                  <span className="w-2 h-2 bg-brand-orange/60 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-brand-orange/60 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-brand-orange/60 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            
            {/* Espaço extra no final para garantir que a última mensagem não fique colada */}
            <div className="h-2" />
          </div>

          {/* RODAPÉ E INPUT */}
          <div className="p-4 bg-background border-t border-border shrink-0">
            
            {/* Chips de Sugestão */}
            {messages.length < 3 && !isLoading && (
              <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide -mx-2 px-2 mb-1">
                {STARTER_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="whitespace-nowrap text-xs bg-secondary hover:bg-brand-orange/10 hover:text-brand-orange text-muted-foreground px-3 py-2 rounded-lg transition-all border border-transparent hover:border-brand-orange/20 font-medium"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div className="relative flex items-center gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Digite sua mensagem..."
                // text-[16px] impede zoom no iOS
                className="pr-12 h-12 rounded-full bg-secondary/50 border-input focus-visible:ring-brand-orange text-[16px] shadow-inner" 
                disabled={isLoading}
              />
              <Button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                size="icon"
                className={cn(
                  "absolute right-1.5 w-9 h-9 rounded-full transition-all shadow-sm",
                  input.trim() 
                    ? "bg-gradient-brand text-white hover:opacity-90" 
                    : "bg-transparent text-muted-foreground hover:bg-transparent shadow-none"
                )}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="text-center mt-3">
              <span className="text-[10px] text-muted-foreground flex items-center justify-center gap-1 opacity-70">
                Powered by <span className="font-bold text-foreground">Bas3 AI</span>
              </span>
            </div>
          </div>
        </Card>
      </div>

      <FloatingChatButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
    </>
  );
};

export default ChatBot;
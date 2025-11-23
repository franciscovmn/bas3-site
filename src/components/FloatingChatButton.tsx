import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface FloatingChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const FloatingChatButton = ({ onClick, isOpen }: FloatingChatButtonProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-50 flex items-center gap-4",
      // No mobile, se estiver aberto, escondemos o botão para não atrapalhar
      isOpen && "hidden md:flex" 
    )}>
      {/* Tooltip de convite */}
      <div
        className={cn(
          "hidden md:flex items-center px-4 py-2 rounded-full shadow-lg transition-all duration-500 ease-out origin-right border",
          "bg-card border-border text-foreground",
          isOpen ? "opacity-0 scale-95 translate-x-4 pointer-events-none" : "opacity-100 scale-100"
        )}
      >
        <span className="text-sm font-medium font-sans">
          Posso ajudar? 👋
        </span>
      </div>

      {/* Botão Principal com Gradiente Bas3 */}
      <Button
        onClick={onClick}
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-glow transition-all duration-300 hover:scale-105 active:scale-95",
          // AQUI: Usa a variável personalizada definida no seu tailwind.config.ts
          "bg-gradient-brand text-white border-0",
          isOpen && "rotate-0"
        )}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          <MessageCircle
            className={cn(
              "absolute h-7 w-7 transition-all duration-300 rotate-0 scale-100",
              isOpen && "rotate-90 opacity-0 scale-50"
            )}
          />
          <X
            className={cn(
              "absolute h-7 w-7 transition-all duration-300 -rotate-90 opacity-0 scale-50",
              isOpen && "rotate-0 opacity-100 scale-100"
            )}
          />
        </div>
      </Button>
    </div>
  );
};

export default FloatingChatButton;
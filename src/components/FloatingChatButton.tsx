import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface FloatingChatButtonProps {
  onClick: () => void;
}

const FloatingChatButton = ({ onClick }: FloatingChatButtonProps) => {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className="fixed bottom-6 right-6 h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-brand hover:opacity-90 text-white border-0 shadow-glow z-40 hover:animate-none transition-all duration-300 hover:scale-110"
    >
      <MessageSquare className="h-6 w-6 md:h-7 md:w-7" />
    </Button>
  );
};

export default FloatingChatButton;
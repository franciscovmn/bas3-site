import { Link } from "react-router-dom";
import logoBlack from "@/assets/logo-black.png"; // Importe a logo preta com um nome diferente

const PageHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoBlack} alt="BAS3 Logo" className="h-10" />
        </Link>
        <Link
          to="/"
          className="text-sm font-medium text-muted-foreground hover:text-accent"
        >
          Voltar para Home
        </Link>
      </div>
    </header>
  );
};

export default PageHeader;
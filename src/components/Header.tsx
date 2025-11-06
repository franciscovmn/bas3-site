// src/components/Header.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ArrowUpRight } from "lucide-react"; // Removi o X daqui, pois não é mais necessário

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "#features", label: "Soluções" },
    { href: "#how-it-works", label: "Como Funciona" },
    { href: "#use-cases", label: "Casos de Uso" },
    { href: "#faq", label: "FAQ" },
  ];

  const handleSmoothScroll = (targetId: string) => {
    setIsMobileMenuOpen(false);
    
    const id = targetId.substring(1); 
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container flex h-16 items-center justify-between rounded-full bg-gradient-brand p-4 shadow-lg border border-white/20">
        <Link 
          to="/" 
          className="flex items-center gap-2" 
          onClick={handleLogoClick}
        >
          <img src={logoWhite} alt="BAS3 Logo" className="h-8" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            size="sm"
            className="rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20"
            onClick={() => handleSmoothScroll("#contact")}
          >
            Contato
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full text-white hover:bg-white/20 hover:text-white"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background p-0 w-[80%]">
              <div className="flex flex-col h-full">
                
                {/* Cabeçalho do Menu Mobile (CORRIGIDO) */}
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="font-semibold">Menu</span>
                  {/* O botão 'X' de fechar é adicionado automaticamente pelo SheetContent.
                      Removi o <SheetClose> manual que estava aqui. */}
                </div>
                
                {/* Links do Menu Mobile */}
                <nav className="flex flex-col p-4 space-y-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <a
                        href={link.href}
                        className="px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSmoothScroll(link.href);
                        }}
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>

                {/* Botão de Contato (Mobile) */}
                <div className="mt-auto p-4 border-t">
                  <SheetClose asChild>
                    <Button
                      className="w-full bg-gradient-brand text-white"
                      onClick={() => handleSmoothScroll("#contact")}
                    >
                      Contato
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
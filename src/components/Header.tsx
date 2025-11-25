import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import DemoDialog from "./DemoDialog";
import logoBlack from "../assets/logo-black.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Atuação", id: "#atuacao" },
    { name: "Diferenciais", id: "#diferenciais" },
    { name: "Metodologia", id: "#methodology" },
    { name: "FAQ", id: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl py-3 border-border/40 shadow-sm"
          : "bg-transparent py-5 border-transparent"
      }`}
    >
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between relative">
        
        {/* 1. LOGO */}
        <div className="flex items-center gap-2 cursor-pointer z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoBlack} alt="Bas3 Logo" className="h-8 w-auto object-contain" />
        </div>

        {/* 2. NAVEGAÇÃO DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors relative group tracking-tight"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* 3. AÇÕES */}
        <div className="flex items-center gap-4 z-50">
          
          {/* BOTÃO DESKTOP ATUALIZADO */}
          <Button 
            className="hidden md:flex rounded-full bg-gradient-brand text-white hover:opacity-90 px-6 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 border-0"
            onClick={() => scrollToSection("#contato")}
          >
            Começar Agora
          </Button>

          {/* MENU MOBILE */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-secondary/80 active:bg-secondary transition-colors">
                  <Menu className="h-8 w-8" strokeWidth={2} />
                </Button>
              </SheetTrigger>
              
              <SheetContent 
                  side="top" 
                  className="w-full h-[100dvh] bg-[#fefbe5] border-none p-0 flex flex-col items-center justify-center animate-in fade-in slide-in-from-top-5 duration-300 [&>button:last-child]:hidden"
              >
                  <SheetClose className="absolute right-4 top-6 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#17191a] transition-colors cursor-pointer z-50">
                      <X className="w-6 h-6" />
                      <span className="sr-only">Fechar</span>
                  </SheetClose>

                  <div className="flex flex-col gap-8 items-center w-full max-w-sm px-6">
                      {navLinks.map((link, index) => (
                      <button
                          key={link.name}
                          onClick={() => scrollToSection(link.id)}
                          className="text-3xl md:text-4xl font-bold text-[#17191a]/80 hover:text-brand-orange transition-colors text-center w-full py-2 group flex items-center justify-center gap-3"
                          style={{ animationDelay: `${index * 50}ms` }}
                      >
                          {link.name}
                          <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange" />
                      </button>
                      ))}
                  </div>

                  <div className="w-16 h-px bg-[#17191a]/10 my-10" />

                  {/* BOTÃO MOBILE ATUALIZADO */}
                  <div className="flex flex-col gap-4 w-full max-w-xs px-6">
                      <Button 
                          className="w-full h-14 text-lg rounded-full bg-gradient-brand text-white shadow-2xl font-bold border-0"
                          onClick={() => scrollToSection("#contato")}
                      >
                          Começar Agora
                      </Button>
                      
                      <p className="text-center text-sm text-[#17191a]/60 mt-4 font-medium">
                          Bas3 AI Infrastructure
                      </p>
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <DemoDialog isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </header>
  );
};

export default Header;
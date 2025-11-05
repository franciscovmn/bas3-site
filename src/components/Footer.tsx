import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background to-muted/30 text-foreground border-t border-border">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="BAS3 Logo" className="h-12" />
            <p className="text-sm text-muted-foreground">
              Infraestrutura de IA completa para empresas que querem liderar o futuro.
            </p>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="font-bold mb-4 text-accent">Soluções</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-accent transition-colors">Chatbots Inteligentes</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-accent transition-colors">Análise de Documentos</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-accent transition-colors">Automação de Processos</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-accent transition-colors">Análise Preditiva</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold mb-4 text-accent">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-accent transition-colors">Como Funciona</a></li>
              <li><a href="#use-cases" className="text-muted-foreground hover:text-accent transition-colors">Casos de Uso</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold mb-4 text-accent">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:bas3automacao@gmail.com" className="hover:text-accent transition-colors">
                  bas3automacao@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <a href="https://wa.me/5583999007432" className="hover:text-accent transition-colors">
                  +55 83 99900-7432
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a 
                href="https://www.linkedin.com/company/bas3" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/bas3.automacao" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BAS3. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

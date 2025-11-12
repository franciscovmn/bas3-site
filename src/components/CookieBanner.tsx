// src/components/CookieBanner.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie_consent";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o consentimento já foi dado
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent !== "true") {
      // Adiciona um pequeno atraso para não sobrecarregar a tela imediatamente
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // Atraso de 1.5 segundos
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Salva o consentimento no localStorage
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    // Em telas pequenas (mobile): fica fixo no rodapé, largura total
    // Em telas médias (md) ou maiores: fica fixo no canto inferior esquerdo
    <Card className="fixed bottom-0 left-0 w-full md:w-auto md:max-w-md md:left-6 md:bottom-6 z-50 animate-slide-up rounded-b-none md:rounded-lg shadow-2xl">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Ícone (opcional, escondido em telas pequenas) */}
          <div className="hidden md:block">
            <Cookie className="h-8 w-8 text-accent" />
          </div>
          
          <div className="flex-1 space-y-2">
            <h3 className="font-semibold">Nós usamos cookies</h3>
            <p className="text-sm text-muted-foreground">
              Usamos cookies essenciais para garantir o funcionamento do site. 
              Como ainda estamos em fase de implementação, não utilizamos cookies de marketing ou análise.
            </p>
          </div>
          
          <Button
            onClick={handleAccept}
            size="sm"
            className="w-full md:w-auto"
          >
            Entendi
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CookieBanner;
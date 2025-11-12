import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop"; 
import CookieBanner from "./components/CookieBanner"; // <-- 1. IMPORTE O NOVO COMPONENTE

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* --- Rotas das Páginas Legais (Comentadas) --- */}
          {/* <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} /> */}
          {/* <Route path="/lgpd" element={<LGPD />} /> */}

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner /> {/* <-- 2. ADICIONE O COMPONENTE AQUI */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
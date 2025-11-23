import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface DemoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoDialog = ({ isOpen, onClose }: DemoDialogProps) => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    problem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})/, "($1) ");
    }
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formData.name || !formData.email || !formData.company || !formData.problem) {
        toast({
          title: "Campos obrigatórios",
          description: "Preencha os campos marcados com *.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      if (formData.phone && formData.phone.length < 14) {
        toast({
          title: "Telefone incompleto",
          description: "Verifique se o número está correto com DDD.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let result;
      try {
        const text = await response.text();
        result = text ? JSON.parse(text) : {};
      } catch {
        console.warn("Resposta não-JSON do servidor");
      }

      if (result?.duplicate) {
        toast({ title: "Já recebido", description: "Já temos seu contato!" });
        onClose();
        return;
      }

      if (!response.ok) throw new Error("Falha no envio");

      toast({
        title: "Sucesso!",
        description: "Solicitação enviada com sucesso.",
      });

      setFormData({ name: "", email: "", company: "", phone: "", problem: "" });
      onClose();
      
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // FORMULÁRIO RESPONSIVO
  // Mobile: Uma coluna (padrão)
  // Desktop (md): Duas colunas (grid-cols-2)
  const FormFields = (
    <div className="grid gap-4 py-2 md:grid-cols-2 md:gap-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground/80">Nome Completo *</Label>
        <Input
          id="name"
          className="text-[16px] md:text-sm h-11" 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Seu nome"
          required
          disabled={isSubmitting}
          autoComplete="name"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground/80">Email Corporativo *</Label>
        <Input
          id="email"
          type="email"
          inputMode="email"
          className="text-[16px] md:text-sm h-11"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="seu@email.com"
          required
          disabled={isSubmitting}
          autoComplete="email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="text-foreground/80">Nome da Empresa *</Label>
        <Input
          id="company"
          className="text-[16px] md:text-sm h-11"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="Sua empresa"
          required
          disabled={isSubmitting}
          autoComplete="organization"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-foreground/80">Telefone / WhatsApp</Label>
        <Input
          id="phone"
          type="tel"
          inputMode="tel"
          className="text-[16px] md:text-sm h-11"
          value={formData.phone}
          onChange={handlePhoneChange}
          placeholder="(DD) 90000-0000"
          maxLength={15}
          disabled={isSubmitting}
          autoComplete="tel"
        />
      </div>

      {/* No desktop, este campo ocupa as 2 colunas (md:col-span-2) */}
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="problem" className="text-foreground/80">Desafio/Necessidade *</Label>
        <Textarea
          id="problem"
          className="text-[16px] md:text-sm min-h-[100px] md:min-h-[80px] resize-none leading-relaxed"
          value={formData.problem}
          onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
          placeholder="Descreva brevemente como podemos ajudar..."
          required
          disabled={isSubmitting}
        />
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="h-[95vh] flex flex-col bg-background">
            <DrawerHeader className="text-left px-5 pt-6 border-b pb-4 shrink-0">
              <DrawerTitle className="text-xl">Agendar Demonstração</DrawerTitle>
              <DrawerDescription className="text-sm mt-1">
                Preencha os dados abaixo para continuarmos.
              </DrawerDescription>
            </DrawerHeader>
            
            <div className="flex-1 overflow-y-auto px-5 pb-40 pt-4">
              <form id="demo-form-mobile" onSubmit={handleSubmit}>
                {FormFields}
              </form>
            </div>

            <DrawerFooter className="px-5 py-4 border-t bg-background shrink-0 pb-8">
              <Button 
                type="submit" 
                form="demo-form-mobile" 
                disabled={isSubmitting}
                className="w-full h-12 text-base bg-gradient-brand shadow-md"
              >
                {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
              </Button>
              <DrawerClose asChild>
                <Button variant="ghost" className="w-full mt-2" disabled={isSubmitting}>
                  Cancelar
                </Button>
              </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  // DESKTOP: MODAL LARGO E SEM SCROLL
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Aumentei para sm:max-w-2xl (aprox 670px) para caber 2 colunas confortavelmente */}
      <DialogContent className="sm:max-w-2xl overflow-visible">
        <DialogHeader>
          <DialogTitle className="text-2xl">Agendar Demonstração</DialogTitle>
          <DialogDescription>
            Conte-nos sobre sua empresa e como podemos ajudar.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="flex flex-col">
          {FormFields}
          
          <div className="flex justify-end gap-3 pt-2 mt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-brand hover:opacity-90 text-white shadow-sm min-w-[140px]"
            >
              {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;
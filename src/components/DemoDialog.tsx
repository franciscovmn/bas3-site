import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface DemoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoDialog = ({ isOpen, onClose }: DemoDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    problem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validação básica
      if (!formData.name || !formData.email || !formData.company || !formData.problem) {
        toast({
          title: "Erro",
          description: "Por favor, preencha todos os campos obrigatórios.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Enviar email
      const subject = encodeURIComponent(`Nova Solicitação de Demonstração - ${formData.company}`);
      const body = encodeURIComponent(
        `Nome: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Empresa: ${formData.company}\n` +
        `Telefone: ${formData.phone || "Não informado"}\n\n` +
        `Principal Desafio:\n${formData.problem}`
      );
      
      window.open(`mailto:bas3automacao@gmail.com?subject=${subject}&body=${body}`, '_blank');

      toast({
        title: "Solicitação Enviada!",
        description: "Entraremos em contato em breve para agendar sua demonstração.",
      });

      // Limpar formulário e fechar
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        problem: "",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Agendar Demonstração</DialogTitle>
          <DialogDescription>
            Conte-nos sobre sua empresa e como podemos ajudar. Entraremos em contato em breve.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Seu nome"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Corporativo *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Nome da Empresa *</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Nome da sua empresa"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone (WhatsApp)</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+55 83 99900-7432"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="problem">Principal Desafio/Necessidade *</Label>
            <Textarea
              id="problem"
              value={formData.problem}
              onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
              placeholder="Conte-nos qual é o principal desafio da sua empresa que podemos ajudar a resolver..."
              className="min-h-[100px]"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-brand hover:opacity-90"
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

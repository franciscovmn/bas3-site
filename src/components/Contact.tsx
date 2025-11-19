import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5583999007432";
  const email = "contato@somosbas3.com.br";

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a infraestrutura de IA da BAS3.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Interesse em Infraestrutura de IA");
    const body = encodeURIComponent("Olá,\n\nGostaria de saber mais sobre a infraestrutura de IA da BAS3.\n\n");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Pronto para
            <span className="bg-gradient-brand bg-clip-text text-transparent"> Começar?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos acelerar sua transformação digital com IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Button
            size="lg"
            onClick={handleWhatsApp}
            className="h-auto py-6 px-8 bg-[#25D366] hover:bg-[#20BA5A] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            <div className="text-left">
              <div className="font-bold text-base">WhatsApp</div>
              <div className="text-xs opacity-90">Resposta imediata</div>
            </div>
          </Button>

          <Button
            size="lg"
            onClick={handleEmail}
            className="h-auto py-6 px-8 bg-gradient-brand hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Mail className="mr-3 h-6 w-6" />
            <div className="text-left">
              <div className="font-bold text-base">Email</div>
              <div className="text-xs opacity-90">Contato formal</div>
            </div>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Email: <a href={`mailto:${email}`} className="text-accent hover:underline">{email}</a>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            WhatsApp: <a href={`https://wa.me/${whatsappNumber}`} className="text-accent hover:underline">+55 (83) 99900-7432</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

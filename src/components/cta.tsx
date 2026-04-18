import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 bg-card relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pronto para transformar sua ideia em{" "}
            <span className="text-gradient">realidade</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Entre em contato e vamos conversar sobre como podemos ajudar o seu
            negócio a crescer com tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Solicitar orçamento
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="text-base px-8 py-6"
            >
              Agendar uma call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

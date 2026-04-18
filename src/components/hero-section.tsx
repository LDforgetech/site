import heroGradient from "@/assets/hero-gradient.png";
import DemoOne from "@/components/demo-onde";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* <img
          src={heroGradient}
          alt=""
          className="w-full h-full object-cover animate-gradient-drift"
          aria-hidden="true"
        /> */}
        <DemoOne />
        {/* Dark overlay for text readability
        <div className="absolute inset-0 bg-background/20" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md mb-4">
          <Code2 className="w-4 h-4 text-hero-accent" />
          <span className="text-sm text-muted-foreground">
            Software sob demanda
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          <span className="text-foreground">Transformamos ideias em </span>
          <span className="text-gradient">software de alto impacto</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Desenvolvemos soluções digitais personalizadas que impulsionam o
          crescimento do seu negócio com tecnologia de ponta.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Fale conosco
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
          <Button
            variant="heroOutline"
            size="lg"
            className="text-base px-8 py-6"
          >
            Ver projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

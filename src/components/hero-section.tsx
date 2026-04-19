import { Button } from "@/components/ui/button";
import { MeshGradient } from "@paper-design/shaders-react";
import { ArrowRight, Code2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const baseSpeed = 1;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "50px",
      },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <MeshGradient
          className="w-full h-full"
          colors={["#0C0727", "#5801CD", "#AD2DFF", "#D4D1FD"]}
          speed={isVisible ? baseSpeed * 0.2 : 0}
          distortion={0.2}
          swirl={0}
          grainMixer={0.3}
          grainOverlay={0}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/5 bg-background/50 backdrop-blur-xl mb-4">
          <Code2 className="w-4 h-4 text-hero-accent" />
          <span className="text-sm text-foreground/80">
            Software sob demanda
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Transformamos ideias em software de alto impacto
          {/* <span className="text-foreground">Transformamos ideias em </span>
          <span className="text-gradient">software de alto impacto</span> */}
        </h1>

        <p className="text-lg md:text-xl   max-w-2xl mx-auto mb-10 leading-relaxed">
          Desenvolvemos soluções digitais personalizadas que impulsionam o
          crescimento do seu negócio com tecnologia de ponta.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Fale conosco
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
          {/* <Button
            variant="heroOutline"
            size="lg"
            className="text-base px-8 py-6"
          >
            Ver projetos
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

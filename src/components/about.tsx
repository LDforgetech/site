import { Accessibility, Eye, Gauge, Layers } from "lucide-react";

const pillars = [
  {
    icon: Gauge,
    title: "Performance (Core Web Vitals)",
    description: "Produtos otimizados para carregar rápido e reter usuários.",
  },
  {
    icon: Accessibility,
    title: "Acessibilidade (a11y)",
    description:
      "Sistemas construídos para serem utilizáveis por qualquer pessoa, em qualquer dispositivo.",
  },
  {
    icon: Layers,
    title: "Arquitetura Moderna",
    description:
      "Foco em ecossistemas robustos com as melhores ferramentas do mercado.",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    description: "Acompanhamento de perto em cada etapa do desenvolvimento.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Sobre nós
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Tecnologia que gera resultados reais
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Somos uma equipe apaixonada por tecnologia e inovação. Trabalhamos
              lado a lado com nossos clientes para entender suas necessidades e
              transformar desafios em soluções digitais que fazem a diferença.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nosso processo é colaborativo, transparente e focado em entregas
              de valor. Do planejamento ao deploy, cada etapa é pensada para
              maximizar o retorno do seu investimento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl border flex flex-col items-center border-border bg-background hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const stats = [
  { value: "150+", label: "Projetos entregues" },
  { value: "8+", label: "Anos de experiência" },
  { value: "50+", label: "Clientes satisfeitos" },
  { value: "99%", label: "Taxa de satisfação" },
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

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-8 rounded-2xl border border-border bg-background text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

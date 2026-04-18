const projects = [
  {
    title: "Plataforma de Gestão Logística",
    category: "Sistema Web",
    description:
      "Sistema completo para gerenciamento de frotas, rotas e entregas em tempo real.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "App de Telemedicina",
    category: "Mobile",
    description:
      "Aplicativo de consultas médicas online com videochamada e prontuário eletrônico.",
    tech: ["React Native", "Firebase", "WebRTC"],
  },
  {
    title: "E-commerce B2B",
    category: "Plataforma",
    description:
      "Marketplace B2B com catálogo inteligente, gestão de pedidos e integração com ERPs.",
    tech: ["Next.js", "Stripe", "AWS"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Projetos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Cases de sucesso
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Gradient placeholder for project image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 via-hero-accent/10 to-glow/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

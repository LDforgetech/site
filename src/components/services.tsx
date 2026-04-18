import { Code, Smartphone, Globe, Database, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description:
      "Aplicações web modernas, responsivas e de alta performance com as melhores tecnologias do mercado.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description:
      "Aplicativos nativos e multiplataforma para iOS e Android com experiência de usuário impecável.",
  },
  {
    icon: Globe,
    title: "Sistemas sob Medida",
    description:
      "ERPs, CRMs e sistemas personalizados que se adaptam perfeitamente ao fluxo do seu negócio.",
  },
  {
    icon: Database,
    title: "Integração de Dados",
    description:
      "Conectamos seus sistemas e automatizamos processos para eliminar retrabalho e ganhar eficiência.",
  },
  {
    icon: Zap,
    title: "APIs & Microsserviços",
    description:
      "Arquiteturas escaláveis e robustas que crescem junto com a demanda do seu produto.",
  },
  {
    icon: Shield,
    title: "Consultoria Técnica",
    description:
      "Auditoria de código, arquitetura de soluções e mentoria para times de desenvolvimento.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            O que fazemos de melhor
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas de software para cada etapa da transformação
            digital da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl m-auto bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

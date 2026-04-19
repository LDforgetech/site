import { Button } from "@/components/ui/button";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container py-2 px-4 rounded-2xl mt-2 w-fit flex items-center justify-between gap-16 border border-foreground/5 bg-background/60 backdrop-blur-xl">
        <img src={logo} alt="logo" className="w-40" />
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#servicos"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Serviços
          </a>
          <a
            href="#sobre"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </a>
        </div>
        <Button variant="hero" size="sm">
          Orçamento
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

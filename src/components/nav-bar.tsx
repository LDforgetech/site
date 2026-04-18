// import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.svg";
// import { Code2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/5 bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
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

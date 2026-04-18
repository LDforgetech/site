// import Logo from "@/components/logo";
import { Code2 } from "lucide-react";
// import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            {/* <Logo /> */}
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg text-foreground">
                SuaEmpresa
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Desenvolvemos software sob demanda que transforma a maneira como
              empresas operam e crescem.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#servicos"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>contato@suaempresa.com</li>
              <li>+55 (11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SuaEmpresa. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

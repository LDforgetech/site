import { ArrowRight, Mail } from "lucide-react";
import Button from "./components/button";
import CarrouselSlide from "./components/carrousel-slide";
import Navigation from "./components/navigation";
import SlideHeader from "./components/slide";
import Logo from "./assets/logo.svg";

function App() {
  return (
    <div className="px-px bg-white/10 max-w-265.5 m-auto ">
      <Navigation />
      <div className="text-white mt-px grid lg:grid-cols-2 grid-cols-1 gap-px">
        <section className="font-cal bg-black pt-5 pb-12 px-6 rounded-md lg:rounded-r-none">
          <div className="pattern-stripes bg-black text-violet/40 rounded py-4 px-6">
            <h1 className="max-w-96 text-white text-2xl lg:text-4xl">
              Transformamos ideias em software de alto impacto
            </h1>
          </div>
          <p className="text-base text-gray mt-2 max-w-102.5">
            Desenvolvemos soluções digitais personalizadas que impulsionam o
            crescimento do seu negócio com tecnologia de ponta.
          </p>
          <div className="mt-10">
            <Button>
              Fale Conosco{" "}
              <ArrowRight className="transition-transform group-hover:-rotate-z-12" />
            </Button>
          </div>
        </section>
        <section className="font-cal text-4xl bg-black py-5 px-6 pb-28 lg:pb-5 rounded-md lg:rounded-l-none">
          <SlideHeader />
        </section>
      </div>
      <section className="bg-black mt-px rounded relative px-6 py-24 flex flex-col lg:flex-row justify-between">
        <div>
          <span className="text-gray/25 font-bold text-sm">_-__-_--</span>
          <h1 className=" text-white text-4xl mb-2 max-w-74.5">
            O que fazemos de melhor
          </h1>
          <p className="max-w-86.5 text-gray">
            Soluções completas de software para cada etapa da transformação
            digital da sua empresa.
          </p>
        </div>
        <CarrouselSlide />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 mt-px gap-px">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 bg-black p-6 lg:p-0 lg:pl-6 flex flex-col justify-center rounded-md lg:rounded-r-none">
          <span className="text-gray/25 font-bold text-sm">_-__-_--</span>
          <h1 className="text-white text-4xl mb-4 max-w-86.5">
            Tecnologia que gera resultados reais
          </h1>
          <p className="text-gray mb-4 max-w-113">
            Somos uma equipe apaixonada por tecnologia e inovação. Trabalhamos
            lado a lado com nossos clientes para entender suas necessidades e
            transformar desafios em soluções digitais que fazem a diferença.
          </p>
          <p className="text-gray max-w-113">
            Nosso processo é transparente e focado em entregas de valor. Do
            planejamento ao deploy, cada etapa é pensada para maximizar o
            retorno do seu investimento.
          </p>
        </div>
        <div className="col-span-1 row-span-1 bg-black relative flex flex-col group cursor-default overflow-hidden rounded-md md:rounded-r-none lg:rounded-none">
          <div className="absolute z-50 top-0 left-0 w-full h-full bg-linear-to-r from-black from-15% md:from-20% pointer-events-none transition-all duration-500 ease-out md:group-hover:from-15%"></div>
          <div className="px-2 py-3 flex-1 pattern-stripes text-violet/20 md:text-gray/10 transition-colors duration-500 ease-out md:group-hover:text-violet/20">
            <h2 className="text-3xl text-white relative z-50">
              Arquitetura Moderna
            </h2>
            <p className="text-sm text-gray max-w-55 relative z-50 opacity-100 translate-x-0 md:opacity-0 md:-translate-x-4 transition-all duration-500 ease-out md:group-hover:translate-x-0 md:group-hover:opacity-100">
              Foco em ecossistemas robustos com as melhores ferramentas do
              mercado.
            </p>
          </div>
          <div className="flex justify-between px-4 py-1.5 border-t mt-1.5 transition-colors duration-500 ease-out border-gray/50 text-gray/50 md:border-gray/15 md:text-gray/15 md:group-hover:border-gray/50 md:group-hover:text-gray/50">
            <span className="relative z-50">_-__-_--</span>
            <span>//</span>
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-black relative flex flex-col group cursor-default overflow-hidden rounded-md md:rounded-l-none">
          <div className="absolute z-50 top-0 left-0 w-full h-full bg-linear-to-l from-black from-15% md:from-20% pointer-events-none transition-all duration-500 ease-out md:group-hover:from-15%"></div>
          <div className="px-2 py-3 flex-1 pattern-stripes text-violet/20 md:text-gray/10 transition-colors duration-500 ease-out md:group-hover:text-violet/20">
            <h2 className="text-3xl text-white relative z-50">Performance</h2>
            <p className="text-sm text-gray max-w-55 relative z-50 opacity-100 translate-x-0 md:opacity-0 md:-translate-x-4 transition-all duration-500 ease-out md:group-hover:translate-x-0 md:group-hover:opacity-100">
              Produtos otimizados para carregar rápido e reter usuários.
            </p>
          </div>
          <div className="flex justify-between px-4 py-1.5 border-t mt-1.5 transition-colors duration-500 ease-out border-gray/50 text-gray/50 md:border-gray/15 md:text-gray/15 md:group-hover:border-gray/50 md:group-hover:text-gray/50">
            <span>//</span>
            <span className="z-50 relative">_-__-_--</span>
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-black relative flex flex-col group cursor-default overflow-hidden rounded-md md:rounded-r-none lg:rounded-none">
          <div className="absolute z-50 top-0 left-0 w-full h-full bg-linear-to-r from-black from-15% md:from-20% pointer-events-none transition-all duration-500 ease-out md:group-hover:from-15%"></div>
          <div className="px-2 py-3 flex-1 pattern-stripes text-violet/20 md:text-gray/10 transition-colors duration-500 ease-out md:group-hover:text-violet/20">
            <h2 className="text-3xl text-white relative z-50">
              Transparência Total
            </h2>
            <p className="text-sm text-gray max-w-55 relative z-50 opacity-100 translate-x-0 md:opacity-0 md:-translate-x-4 transition-all duration-500 ease-out md:group-hover:translate-x-0 md:group-hover:opacity-100">
              Acompanhamento de perto em cada etapa do desenvolvimento.
            </p>
          </div>
          <div className="flex justify-between px-4 py-1.5 border-t mt-1.5 transition-colors duration-500 ease-out border-gray/50 text-gray/50 md:border-gray/15 md:text-gray/15 md:group-hover:border-gray/50 md:group-hover:text-gray/50">
            <span className="relative z-50">_-__-_--</span>
            <span>//</span>
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-black relative flex flex-col group cursor-default overflow-hidden rounded-md md:rounded-l-none">
          <div className="absolute z-50 top-0 left-0 w-full h-full bg-linear-to-l from-black from-15% md:from-20% pointer-events-none transition-all duration-500 ease-out md:group-hover:from-15%"></div>
          <div className="px-2 py-3 flex-1 pattern-stripes text-violet/20 md:text-gray/10 transition-colors duration-500 ease-out md:group-hover:text-violet/20">
            <h2 className="text-3xl text-white relative z-50">
              Escalabilidade e Código Limpo
            </h2>
            <p className="text-sm text-gray max-w-55 relative z-50 opacity-100 translate-x-0 md:opacity-0 md:-translate-x-4 transition-all duration-500 ease-out md:group-hover:translate-x-0 md:group-hover:opacity-100">
              Sistemas preparados para crescer junto com a sua empresa.
            </p>
          </div>
          <div className="flex justify-between px-4 py-1.5 border-t mt-1.5 transition-colors duration-500 ease-out border-gray/50 text-gray/50 md:border-gray/15 md:text-gray/15 md:group-hover:border-gray/50 md:group-hover:text-gray/50">
            <span>//</span>
            <span className="z-50 relative">_-__-_--</span>
          </div>
        </div>
      </section>
      <section className="bg-black relative mt-px rounded overflow-hidden py-8">
        <div className="bg-linear-to-r absolute z-40 top-0 right-0 from-violet via-black to-violet w-full h-full opacity-10"></div>
        <div className="max-w-104 m-auto">
          <h2 className="text-2xl lg:text-4xl text-center mb-4 relative z-50">
            Pronto para transformar sua ideia em realidade?
          </h2>
          <div className="text-center relative z-50">
            <Button>
              Falar conosco
              <ArrowRight className="transition-transform group-hover:-rotate-z-12" />
            </Button>
          </div>
        </div>
      </section>
      <footer className="bg-black relative px-11.5 mt-px rounded-t-md overflow-hidden py-4">
        <div className="flex justify-between mb-8 opacity-20">
          <span>///</span>
          <span className="z-50 relative">_-__-_--</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="">
            <img src={Logo} alt="Logo" />
            <p className="text-gray text-sm max-w-88 mt-2">
              Desenvolvemos software sob demanda que transforma a maneira como
              empresas operam e crescem.
            </p>
          </div>
          <div>
            <h2 className="text-3xl mt-6 lg:mt-0 text-left">Contato</h2>
            <ul className="flex flex-col items-start md:items-end">
              <li className="pattern-stripes rounded mt-3 hover:text-violet/50 group text-gray/15 p-0.5 m-0">
                <a
                  className="bg-black rounded flex gap-2 text-gray/60 group-hover:text-gray px-2 py-1"
                  href=""
                >
                  <svg
                    className="fill-violet w-5 h-5"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Whatsapp
                </a>
              </li>
              <li className="pattern-stripes rounded mt-3 hover:text-violet/50 group text-gray/15 p-0.5 m-0">
                <a
                  className="bg-black rounded flex gap-2 items-center text-gray/60 group-hover:text-gray px-2 py-1"
                  href=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="fill-violet w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  Linkedin
                </a>
              </li>
              <li className="pattern-stripes rounded mt-3 hover:text-violet/50 group text-gray/15 p-0.5 m-0">
                <span className="bg-black rounded flex gap-2 items-center text-gray/60 group-hover:text-gray px-2 py-1">
                  <Mail className="text-violet" />
                  ldforgetech@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pattern-stripes text-gray/10 rounded px-6 py-2 mt-6 flex items-center justify-between">
          <p className="text-gray text-sm">
            LD Forgetech © 2026 - Alguns direitos reservados.
          </p>
          <p className="text-gray text-sm hidden md:block">///</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { ArrowRight } from "lucide-react";
import Button from "./components/button";
import CarrouselSlide from "./components/carrousel-slide";
import Navigation from "./components/navigation";
import SlideHeader from "./components/slide";

function App() {
  return (
    <div className="px-px bg-white/10 max-w-265.5 m-auto ">
      <Navigation />
      <div className="text-white mt-px grid grid-cols-2 gap-px">
        <section className="font-cal bg-black pt-5 pb-12 px-6 rounded-l-md">
          <div className="pattern-stripes bg-black text-violet/40 rounded py-4 px-6">
            <h1 className="max-w-96 text-white text-4xl">
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
        <section className="font-cal text-4xl relative bg-black py-5 px-6 rounded-r-md">
          <SlideHeader />
        </section>
      </div>
      <section className="bg-black mt-px rounded relative px-6 py-24 flex justify-between">
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
      <section className="grid grid-cols-4 grid-rows-2  mt-px gap-px">
        <div className="col-span-2 row-span-2 bg-black pl-6 flex flex-col justify-center">
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
        <div className="col-span-1 row-span-1 bg-black relative flex flex-col group cursor-default overflow-hidden">
          <div className="absolute z-50 top-0 left-0 w-full h-full bg-linear-to-r from-black from-20% to-transparent pointer-events-none transition-all duration-500 ease-out group-hover:from-15%"></div>
          <div className="px-2 py-3 pattern-stripes text-gray/10 transition-colors duration-500 ease-out group-hover:text-violet/20">
            <h2 className="text-3xl text-white relative z-50">
              Arquitetura Moderna
            </h2>
            <p className="text-sm text-gray max-w-55 relative z-50 opacity-0 -translate-x-4 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
              Foco em ecossistemas robustos com as melhores ferramentas do
              mercado.
            </p>
          </div>
          <div className="flex justify-between px-4 py-1.5 border-t border-gray/15 mt-1.5 text-gray/15 transition-colors duration-500 ease-out group-hover:border-gray/50 group-hover:text-gray/50">
            <span className="relative z-50">_-__-_--</span>
            <span>//</span>
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-black relative flex flex-col group cursor-default overflow-hidden rounded-r-lg">
          <div className="absolute z-50 top-0 left-0 w-full h-full bg-linear-to-l from-black from-20% to-transparent pointer-events-none transition-all duration-500 ease-out group-hover:from-15%"></div>
          <div className="px-2 py-3 flex-1 pattern-stripes text-gray/10 transition-colors duration-500 ease-out group-hover:text-violet/20">
            <h2 className="text-3xl text-white relative z-50">Performance</h2>
            <p className="text-sm text-gray max-w-55 relative z-50 opacity-0 -translate-x-4 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
              Produtos otimizados para carregar rápido e reter usuários.
            </p>
          </div>
          <div className="flex justify-between px-4 py-1.5 border-t border-gray/15 mt-1.5 text-gray/15 transition-colors duration-500 ease-out group-hover:border-gray/50 group-hover:text-gray/50">
            <span>//</span>
            <span className="z-50 relative">_-__-_--</span>
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-black relative flex flex-col group cursor-default overflow-hidden">
          <div className="absolute z-50 top-0 left-0 w-full h-full bg-linear-to-r from-black from-20% to-transparent pointer-events-none transition-all duration-500 ease-out group-hover:from-15%"></div>
          <div className="px-2 py-3 pattern-stripes text-gray/10 transition-colors duration-500 ease-out group-hover:text-violet/20">
            <h2 className="text-3xl text-white relative z-50">
              Transparência Total
            </h2>
            <p className="text-sm text-gray max-w-55 relative z-50 opacity-0 -translate-x-4 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
              Acompanhamento de perto em cada etapa do desenvolvimento.
            </p>
          </div>
          <div className="flex justify-between px-4 py-1.5 border-t border-gray/15 mt-1.5 text-gray/15 transition-colors duration-500 ease-out group-hover:border-gray/50 group-hover:text-gray/50">
            <span className="relative z-50">_-__-_--</span>
            <span>//</span>
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-black relative flex flex-col group cursor-default overflow-hidden rounded-r-lg">
          <div className="absolute z-50 top-0 left-0 w-full h-full bg-linear-to-l from-black from-20% to-transparent pointer-events-none transition-all duration-500 ease-out group-hover:from-15%"></div>
          <div className="px-2 py-3 flex-1 pattern-stripes text-gray/10 transition-colors duration-500 ease-out group-hover:text-violet/20">
            <h2 className="text-3xl text-white relative z-50">
              Escalabilidade e Código Limpo
            </h2>
            <p className="text-sm text-gray max-w-55 relative z-50 opacity-0 -translate-x-4 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
              Sistemas preparados para crescer junto com a sua empresa.
            </p>
          </div>
          <div className="flex justify-between px-4 py-1.5 border-t border-gray/15 mt-1.5 text-gray/15 transition-colors duration-500 ease-out group-hover:border-gray/50 group-hover:text-gray/50">
            <span>//</span>
            <span className="z-50 relative">_-__-_--</span>
          </div>
        </div>
      </section>
      <section className="bg-black relative mt-px rounded overflow-hidden py-4">
        <div className="bg-linear-to-r absolute z-40 top-0 right-0 from-violet via-black to-violet w-full h-full opacity-10"></div>
        <div className="max-w-104 m-auto">
          <h2 className="text-4xl text-center mb-4 relative z-50">
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
    </div>
  );
}

export default App;

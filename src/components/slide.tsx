import { useState } from "react";
import imgQpz from "../assets/slide-header/img1.png";
import imgDr from "../assets/slide-header/img3.png";
import imgOpenCircle from "../assets/slide-header/img2.png";
import imgConversaiada from "../assets/slide-header/img4.png";
import { MoveRight } from "lucide-react";

export default function SlideHeader() {
  const listaDeImagens = [
    {
      name: "QPZ Treinamentos",
      path: imgQpz,
      desc: "Plataforma de cursos onlline",
      url: "https://elevareqpz.com.br",
    },
    {
      name: "Dr Construtora",
      path: imgDr,
      desc: "Site Institucional",
      url: "https://grupodr.com.br",
    },
    {
      name: "Conversaiada",
      path: imgConversaiada,
      desc: "Plaforma de podcast",
      url: "https://conversaiada.com.br",
    },
    {
      name: "Open circle",
      path: imgOpenCircle,
      desc: "Site Institucional",
      url: "https://opencircle.com.br",
    },
  ];

  const [imagemAtivaIndex, setImagemAtivaIndex] = useState(0);

  function handleClick() {
    setImagemAtivaIndex(
      (indexAtual) => (indexAtual + 1) % listaDeImagens.length,
    );
  }

  function getEstiloRotativo(indexItem: number) {
    const posicaoRelativa =
      (indexItem - imagemAtivaIndex + listaDeImagens.length) %
      listaDeImagens.length;

    switch (posicaoRelativa) {
      case 0:
        return "z-40 scale-100 translate-y-0 opacity-100 inline-block";
      case 1:
        return "z-30 scale-95 -translate-y-4 opacity-100 absolute";
      case 2:
        return "z-20 scale-90 -translate-y-8 opacity-100 absolute";
      case 3:
        return "z-40 scale-100 translate-y-0 opacity-0 absolute";
      default:
        return "hidden";
    }
  }

  return (
    <>
      <div>
        <div className="text-gray/25 text-sm font-bold flex justify-between items-center mb-10">
          <div className="select-none">
            {listaDeImagens.map((_, i) => (
              <span
                key={i}
                className={i === imagemAtivaIndex ? "text-white" : ""}
              >
                |
              </span>
            ))}
          </div>
          <span>_-__-_--</span>
        </div>
        <div
          className="relative z-50 flex items-center  flex-col gap-4 mt-12 cursor-pointer"
          onClick={handleClick}
        >
          {listaDeImagens.map((imagemSrc, index) => {
            return (
              <img
                key={index}
                className={`m-auto  rounded transition-all bg-black duration-500 ${getEstiloRotativo(index)}`}
                src={imagemSrc.path}
                alt={`Imagem ${index + 1}`}
              />
            );
          })}
          <div
            onClick={handleClick}
            className="absolute cursor-pointer w-full  pl-6 py-2 pt-20 -bottom-16 z-50 rounded bg-linear-to-t from-black from-50% to-transparent"
          >
            <div className="flex flex-col " key={imagemAtivaIndex}>
              <h3 className="text-lg cursor-text animate-[slideRight_0.3s_ease-out]">
                {listaDeImagens[imagemAtivaIndex].name}
              </h3>
              <p className="text-base text-gray mb-1 cursor-text animate-[slideRight_0.4s_ease-out]">
                {listaDeImagens[imagemAtivaIndex].desc}
              </p>
              <a
                target="_blank"
                href={listaDeImagens[imagemAtivaIndex].url}
                className="text-sm leading-none hover:no-underline underline animate-[slideRight_0.5s_ease-out] flex items-center gap-2"
              >
                <MoveRight size={16} />{" "}
                {listaDeImagens[imagemAtivaIndex].url.slice(8)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import imgAppWeb from "../assets/carrousel/appweb.png";
import imgEcommerce from "../assets/carrousel/ecommerce.png";
import imgPortfolio from "../assets/carrousel/portfolio.png";
import imgSite from "../assets/carrousel/site.png";

export default function CarrouselSlide() {
  const listaDeImagens = [imgAppWeb, imgEcommerce, imgPortfolio, imgSite];

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
        return "absolute top-0 translate-x-12 z-10 scale-90 opacity-60";
      case 1:
        return "relative  translate-x-0 scale-100 z-50";
      case 2:
        return "absolute top-0 -translate-x-12 z-10 scale-90 opacity-60";
      case 3:
        return "absolute top-0 -translate-x-12 z-10 scale-80 opacity-40";
      default:
        return "opacity-0 hidden";
    }
  }

  return (
    <>
      <div>
        <div
          className="pr-6 pl-6 cursor-pointer relative"
          onClick={handleClick}
        >
          {listaDeImagens.map((imagemSrc, index) => {
            return (
              <img
                key={index}
                className={`m-auto rounded transition-all bg-black  duration-500 ${getEstiloRotativo(index)}`}
                src={imagemSrc}
                alt={`Imagem ${index + 1}`}
              />
            );
          })}
        </div>
        <div>
          <div className="mt-2 text-gray/35 text-center cursor-pointer">
            {listaDeImagens.map((_, i) => (
              <span
                key={i}
                className={i === imagemAtivaIndex ? "text-white" : ""}
              >
                |
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

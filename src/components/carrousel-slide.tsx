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
        return "absolute lg:top-0 -top-3 lg:translate-x-[10%] translate-x-[8%] z-10 lg:scale-90 scale-80 opacity-60";
      case 1:
        return "relative translate-x-0 scale-100 z-50";
      case 2:
        return "absolute lg:top-0 -top-3 lg:-translate-x-[10%] -translate-x-[8%] z-10 lg:scale-90 scale-80 opacity-60";
      // return "absolute lg:top-0 -top-3 lg:-translate-x-[10%] -translate-x-[8%] z-10 lg:scale-90 scale-80 opacity-60";
      case 3:
        return "absolute top-0 translate-x-0 z-10 scale-50 opacity-0";
      default:
        return "hidden";
    }
  }

  return (
    <>
      <div>
        <div
          className="pr-6 pl-6 cursor-pointer relative flex justify-center mt-8"
          onClick={handleClick}
        >
          {listaDeImagens.map((imagemSrc, index) => {
            return (
              <img
                key={index}
                className={`rounded transition-all bg-black duration-500 ${getEstiloRotativo(index)}`}
                src={imagemSrc}
                alt={`Imagem ${index + 1}`}
              />
            );
          })}
        </div>
        <div onClick={handleClick}>
          <div className="mt-2 text-gray/35 text-center cursor-pointer select-none">
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

import React, { useEffect, useState } from "react";
import imgBronze from "../img/bronze-medalla-olímpica.png";
import imgSilver from "../img/silver-medalla-olímpica.png";
import imgGold from "../img/gold-medalla-olímpica.png";
import Categoria from "../components/Categoria";
import "./categoria.css"

export default function CategoriaView({ data }) {
  const [dataCategorias, setdataCategorias] = useState([]);

  useEffect(() => {
    const gold = data.filter((item) => item.gold >= 1).length;
    const silver = data.filter((item) => item.silver >= 1).length;
    const bronze = data.filter((item) => item.bronze >= 1).length;

    setdataCategorias([
      {
        title: "Gold",
        img: imgGold,
        descripcion:
          "Una medalla de oro es una medalla que se otorga al ganador por una institución de competiciones como los Juegos Olímpicos.",
        total: gold,
      },
      {
        title: "Silver",
        img: imgSilver,
        descripcion:
          "Una medalla de plata es una medalla que se otorga al competidor o competidora que queda en segunda posición de una competición como los Juegos Olímpicos.",
        total: silver,
      },
      {
        title: "Bronze",
        img: imgBronze,
        descripcion:
          "Una medalla de bronce es una medalla que se otorga al tercer clasificado de diversas competiciones como los Juegos Olímpicos.",
        total: bronze,
      },
    ]);
  }, []);

  return (
    <div className="container_categorias">
      {dataCategorias ? (
        dataCategorias.map((items, index) => (
          <Categoria
            title={items.title}
            img={items.img}
            descripcion={items.descripcion}
            total={items.total}
            key={index}
          />
        ))
      ) : (
        <div>Sin categorias</div>
      )}
    </div>
  );
}

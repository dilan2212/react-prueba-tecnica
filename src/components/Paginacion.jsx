import React, { useEffect, useState } from "react";
import { Lista } from "./Lista";
import "./paginacion.css";

export const Paginacion = ({ data }) => {
  const [dataPaginacion, setDataPaginacion] = useState([]);

  const [numPag, setNumPag] = useState(1);

  const [pagAct, setPagAct] = useState(1);

  const [pagNew, setPagNew] = useState(10);

  const [pagTotal, setPagTotal] = useState(0);

  useEffect(() => {
    setPagTotal(data.length > 0 ? Math.round(data.length / 10) : 0);
    setDataPaginacion([...data.slice(pagAct, pagNew)]);
  }, [data]);

  const calcularPaginar = (numPagNew) => {
    if (numPagNew >= 1) {
      let pagActNew = numPagNew * 10;
      let pagNewNew = pagActNew + 10;
      setDataPaginacion([...data.slice(pagActNew, pagNewNew)]);
      setNumPag(numPagNew);
      setPagAct(pagActNew);
      setPagNew(pagNewNew);
    }
  };

  const onchangeIzquierda = () => {
    let numPagNew = numPag - 1;
    if (numPagNew >= 1) {
      calcularPaginar(numPagNew);
    }
  };

  const onchangeDerecha = () => {
    let numPagNew = numPag + 1;
    if (numPagNew < pagTotal) {
      calcularPaginar(numPagNew);
    }
  };

  return (
    <div>
      <Lista data={dataPaginacion} />
      <div className="container-pagination">
        <button className="btn-flechas" onClick={onchangeIzquierda}>
          {"<"}
        </button>
        <div className="btn-center">
          <div className="btn-center-items">{numPag}</div>
          <div className="btn-center-items">{"..."}</div>
          <div className="btn-center-items">{pagTotal}</div>
        </div>
        <button className="btn-flechas" onClick={onchangeDerecha}>
          {">"}
        </button>
      </div>
    </div>
  );
};

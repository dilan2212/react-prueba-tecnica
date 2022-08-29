import React, { useEffect, useState } from "react";

export const Lista = ({ data }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList([data]);
  }, [data]);

  return (
    <div className="table-consult">
      <div className="table-head">
        <div className="item-head">
          <p>Altleta</p>
          <p>Edad</p>
          <p>País</p>
          <p>Año</p>
          <p>Fecha</p>
          <p>Oro</p>
          <p>Plata</p>
          <p>Bronce</p>
          <p>Total</p>
        </div>
      </div>
      <div className="table-body">
        {data ? (
          data.map((items, index) => (
            <div className="item-body" key={index}>
              <p>{items.athlete}</p>
              <p>{items.age}</p>
              <p>{items.country}</p>
              <p>{items.year}</p>
              <p>{items.date}</p>
              <p>{items.gold}</p>
              <p>{items.silver}</p>
              <p>{items.bronze}</p>
              <p>{items.total}</p>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

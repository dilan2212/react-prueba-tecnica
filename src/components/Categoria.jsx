import React, { useState } from "react";
import Modal from "./Modal";

export default function Categoria({ title, img, total, descripcion }) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <div className="container_categoria" onClick={() => setisOpen(true)}>
        <h1>{title}</h1>
        <img src={img} alt={title} />
        <p>Total:</p>
        <h2>{total}</h2>
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} setisOpen={setisOpen}>
          <div className="container_categoria">
            <h1>{title}</h1>
            <img src={img} alt={title} />
            <p>{descripcion}</p>
          </div>
        </Modal>
      )}
    </>
  );
}

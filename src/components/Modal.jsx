import React, { useEffect, useState } from "react";
import "../components/modal.css";

export default function Modal({ children, isOpen,setisOpen}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div className={`modal ${open ? "modal_active" : ""}`}>
      <div className="modal_container">
        {children}
        <button className="btn_ingresar"onClick={()=>setisOpen(false)}>Cerrar</button>
      </div>
    </div>
  );
}

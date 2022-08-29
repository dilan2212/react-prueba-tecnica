import React from "react";
import { Paginacion } from "../components/Paginacion";

import "./tablaView.css"

export default function TablaView({data}) {
  
  return <Paginacion data={data}></Paginacion>;
}

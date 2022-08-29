import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import CategoriasView from "./CategoriasView";
import TablaView from "./TablaView";
import MantenimientoView from "./MantenimientoView";
import "./mainView.css";
import PrincipalView from "./PrincipalView";
import { getData } from "../services/getData";

function MainView({ user, isAuntentication, setIsAuntentication }) {
  const [isadministrado, setIsadministrado] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all([getData()])
      .then((data2) => {
        setData([...data2[0].data]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    const administrador = user.rol === "administrador";
    setIsadministrado(administrador);
    if (!administrador) {
      navigate("/mantenimiento", { replace: true });
    }
  }, []);

  return (
    <div>
      <Header
        user={user}
        isAuntentication={isAuntentication}
        setIsAuntentication={setIsAuntentication}
        isadministrado={isadministrado}
      />
      <div className="main_container">
        <Routes>
          {isadministrado ? (
            <>
              <Route path="/main" element={<PrincipalView />} />
              <Route path="/lista" element={<TablaView data={data} />} />
              <Route path="/categoria" element={<CategoriasView data={data} />} />
              <Route path="*" element={<PrincipalView />} />
            </>
          ) : (
            <>
              <Route path="/mantenimiento" element={<MantenimientoView />} />
              <Route path="*" element={<MantenimientoView />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default MainView;

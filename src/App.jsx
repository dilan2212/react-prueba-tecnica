import "./App.css";
import React, { useState } from "react";
import LoginView from "./views/LoginView";

import { Route, Routes } from "react-router-dom";
import MainView from "./views/MainView";

function App() {
  const [user, setUser] = useState({
    username: "",
    rol: "",
    name: "",
    password: "",
  });

  const [isAuntentication, setIsAuntentication] = useState(false);

  if (isAuntentication) {
    return (
      <MainView
        user={user}
        setUser={setUser}
        isAuntentication={isAuntentication}
        setIsAuntentication={setIsAuntentication}
      ></MainView>
    );
  } else {
    return (
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LoginView
                user={user}
                setUser={setUser}
                isAuntentication={isAuntentication}
                setIsAuntentication={setIsAuntentication}
              />
            }
          />
          <Route
            path="*"
            element={
              <LoginView
                user={user}
                setUser={setUser}
                isAuntentication={isAuntentication}
                setIsAuntentication={setIsAuntentication}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;

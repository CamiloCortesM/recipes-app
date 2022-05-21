import React, { useState } from "react";
import RoutesApp from "./components/RoutesApp";
import { ContextRecipes } from "./hooks/ContextRecipes";

const MainApp = () => {
  const [recipes, setRecipes] = useState([]);
  return (
    <div>
      <ContextRecipes.Provider
        value={{
          recipes,
          setRecipes,
        }}
      >
        <RoutesApp />
      </ContextRecipes.Provider>
    </div>
  );
};

export default MainApp;

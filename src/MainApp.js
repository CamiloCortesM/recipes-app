import React, { useEffect, useState } from "react";
import RoutesApp from "./components/RoutesApp";
import { initialData } from "./helpers/initialData";
import { ContextRecipes } from "./hooks/ContextRecipes";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("recipes")) || initialData()
  )
};
const MainApp = () => {
  const [recipes, setRecipes] = useState(init);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

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

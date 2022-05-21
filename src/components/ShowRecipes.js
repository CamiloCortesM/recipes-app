import React, { useContext } from "react";
import { ContextRecipes } from "../hooks/ContextRecipes";

const ShowRecipes = () => {
  const { recipes } = useContext(ContextRecipes);

  return (
    <div>
      {recipes.map((data) => (
        <h1>{JSON.stringify(data,null,3)}</h1>
      ))}
    </div>
  );
};

export default ShowRecipes;

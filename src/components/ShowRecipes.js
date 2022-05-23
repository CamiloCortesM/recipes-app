import React, { useContext } from "react";
import { ContextRecipes } from "../hooks/ContextRecipes";
import CardRecipes from "./CardRecipes";

const ShowRecipes = () => {
  const { recipes } = useContext(ContextRecipes);



  return (
    <div className="Container-Card">
      {recipes.map((data) => (
        <CardRecipes key={data.id}data={data} />
      ))}
    </div>
  );
};

export default ShowRecipes;

import React, { useContext } from "react";
import { ContextRecipes } from "../hooks/ContextRecipes";

const ShowRecipes = () => {
  const { recipes } = useContext(ContextRecipes);
  console.log(recipes)

  return (
    <div className="Container-Card">
      {recipes.map((data) => {
        return (
          <div className="Card-Recipes">
            <div className="Card-Img">
            <img src={data.img}/>
            </div>
          <div className="Card-Name">
          <h2>{data.name}</h2>
          </div>
          <div className="Card-Fotter">
          <p>{data.descrip}</p>
          </div>
          </div>
        );
      })}
     
      {/* {recipes.map((data) => (
        <h1>{JSON.stringify(data,null,3)}</h1>
      ))} */}
    </div>
  );
};

export default ShowRecipes;

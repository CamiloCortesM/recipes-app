import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextRecipes } from "../hooks/ContextRecipes";

const SceneRecipe = () => {
  const { id } = useParams();
  const { recipes } = useContext(ContextRecipes);
  const UniqueRecipe = recipes.filter((recipe) => recipe.id === parseInt(id));
  const { name, ingredients, img , descrip} = UniqueRecipe[0];
  const SplitString =(data)=>{
    return data.split(',');
  }
  console.log(SplitString(ingredients));
  return (
    <div className="Scene-Recipe">
      <div className="Section-Name">
        <h1>{name}</h1>
      </div>
      <div className="Section-Img">
        <img src={img} alt={name} />
      </div>
      <div className="Section-Ingredients">
      <ul>
        {
          SplitString(ingredients).map((data,i)=>(
            <li key={i}>{data}</li>
          ))
        }
      </ul>
      </div>
      <div className="Section-Descrip">
        {descrip}
      </div>
    </div>
  );
};

export default SceneRecipe;

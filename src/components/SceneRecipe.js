import React from "react";
import { useParams } from "react-router-dom";
import useRecipe from "../hooks/useRecipe";

const SceneRecipe = () => {
  const { id } = useParams();
  const { UniRecipe, SplitString } = useRecipe(id);
  const { name, img, ingredients, descrip } = UniRecipe;
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
          {SplitString(ingredients).map((data, i) => (
            <li key={i}>{data}</li>
          ))}
        </ul>
      </div>
      <div className="Section-Descrip">{descrip}</div>
    </div>
  );
};

export default SceneRecipe;

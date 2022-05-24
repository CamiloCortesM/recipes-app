import React from "react";
import { Link } from "react-router-dom";

const CardRecipes = ({ data }) => {
  return (
    <div className="Card-Recipes">
      <Link
        to={`/recipes/${data.id}`}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <div className="Card-Img">
          <img src={data.img} alt={data.name} />
        </div>
        <div className="Card-Name">
          <h2>{data.name}</h2>
        </div>
        <div className="Card-Fotter">{data.descrip}</div>
      </Link>
    </div>
  );
};

export default CardRecipes;

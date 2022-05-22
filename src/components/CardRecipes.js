import React from "react";

const CardRecipes = ({ data }) => {
  return (
    <div className="Card-Recipes">
      <div className="Card-Img">
        <img src={data.img} alt={data.name} />
      </div>
      <div className="Card-Name">
        <h2>{data.name}</h2>
      </div>
      <div className="Card-Fotter">{data.descrip}</div>
    </div>
  );
};

export default CardRecipes;

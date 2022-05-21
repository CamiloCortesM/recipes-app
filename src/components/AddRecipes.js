import React, { useContext, useState } from "react";
import { ContextRecipes } from "../hooks/ContextRecipes";

const AddRecipes = () => {

    const { recipes, setRecipes} = useContext(ContextRecipes)

  const [input, setInput] = useState({
    name: "",
    ingredients: "",
    img: "",
    descrip: "",
  });

  const { name, ingredients, img, descrip } = input;
  const handleSubmit = (e) => {
    e.preventDefault();

    setRecipes([...recipes,{
        name,
        ingredients,
        img,
        descrip
    }])
  };

  const handleInputChange = ({ target }) => {
    console.log(target.name);
    setInput({
      ...input,
      [target.name]: target.value,
    });
  };

  const handleClear = () => [
    setInput({
      name: "",
      ingredients: "",
      img: "",
      descrip: "",
    }),
  ];
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nameRecipe" className="form-label">
          Name Recipe
        </label>
        <input
          type="text"
          value={name}
          className="form-control"
          id="nameRecipe"
          onChange={handleInputChange}
          name="name"
        />
        <div id="recipeHelp" className="form-text">
          Name of the recipe you want to create
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="ingredientsRecipe" className="form-label">
          Ingredients
        </label>
        <input
          value={ingredients}
          type="text"
          className="form-control"
          onChange={handleInputChange}
          id="ingredientsRecipe"
          placeholder=" 2 tomatos,3 potatos,6 eggs,1/2 tablespoon sugar,etc"
          name="ingredients"
        />
        <div id="ingredientsHelp" className="form-text">
          all ingredients separated by commas
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="imgRecipe" className="form-label">
          Url Image Recipe
        </label>
        <input
          value={img}
          type="text"
          className="form-control"
          onChange={handleInputChange}
          id="imgRecipe"
          placeholder=" https://image.png"
          name="img"
        />
        <div id="imgHelp" className="form-text">
          url of the image of the finished recipe
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="descripRecipe" className="form-label">
          Description Recipe
        </label>
        <textarea
          className="form-control"
          id="descripRecipe"
          value={descrip}
          onChange={handleInputChange}
          rows="3"
          name="descrip"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <div className="btn btn-warning  m-3" onClick={handleClear}>Clear</div>
    </form>
  );
};

export default AddRecipes;

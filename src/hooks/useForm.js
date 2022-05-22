import { useContext, useState } from "react";
import { ContextRecipes } from "./ContextRecipes";

const useForm = () => {
  const { recipes, setRecipes } = useContext(ContextRecipes);
  const [input, setInput] = useState({
    name: "",
    ingredients: "",
    img: "",
    descrip: "",
  });
  const { name, ingredients, img, descrip } = input;

  const handleSubmit = (e) => {
    e.preventDefault();

    setRecipes([
      ...recipes,
      {
        id: new Date().getTime(),
        name,
        ingredients,
        img,
        descrip,
      },
    ]);

    setInput({
      name: "",
      ingredients: "",
      img: "",
      descrip: "",
    });
  };

  const handleInputChange = ({ target }) => {
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

  return {
    input,
    handleClear,
    handleInputChange,
    handleSubmit,
  };
};

export default useForm;

import { useContext } from "react";
import { ContextRecipes } from "./ContextRecipes";

const useRecipe = (id) => {

    const { recipes } = useContext(ContextRecipes);
    const UniqueRecipe = recipes.filter((recipe) => recipe.id === parseInt(id));

    const UniRecipe = UniqueRecipe[0];

    const SplitString =(data)=>{
      return data.split(',');
    }

    return{
        UniRecipe,
        SplitString
    }
};

export default useRecipe;

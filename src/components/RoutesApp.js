import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddRecipes from "./AddRecipes";
import Error from "./Error";
import NavRecipes from "./NavRecipes";
import SceneRecipe from "./SceneRecipe";
import ShowRecipes from "./ShowRecipes";

const RoutesApp = () => {
  return (
    <Router>
      <div>
        <NavRecipes />
        <div className="container">
          <Routes>
            <Route path="/add" element={<AddRecipes />} />
            <Route path="/" element={<ShowRecipes />} />
            <Route path="*" element={<Error />} />
            <Route path="/recipes/:id" element={<SceneRecipe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default RoutesApp;

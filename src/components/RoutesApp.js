import React from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import AddRecipes from "./AddRecipes";
import NavRecipes from "./NavRecipes";
import ShowRecipes from "./ShowRecipes";

const RoutesApp = () => {
  return (
    <Router>
      <div>
        <NavRecipes />
        <Routes>
          <Route path="/add" element={<AddRecipes />} />
          <Route path="/" element={<ShowRecipes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default RoutesApp;
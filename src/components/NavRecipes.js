import React from "react";
import { NavLink } from "react-router-dom";

const NavRecipes = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark" >
  <div className="container-fluid expand">
    <h2 className="navbar-brand">Recipes</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " aria-current="page" to="/add">AddRecipes</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default NavRecipes;

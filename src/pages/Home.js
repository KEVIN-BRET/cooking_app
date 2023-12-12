import React from "react";
import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home_title">React Cooking App</h1>
      <h2 className="search">CHAMP DE RECHERCHE</h2>

      <Recipes />
    </div>
  );
};

export default Home;

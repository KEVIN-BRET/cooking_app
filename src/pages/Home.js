import React from "react";
import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home_title">React Cooking App</h1>
      <Recipes />
    </div>
  );
};

export default Home;

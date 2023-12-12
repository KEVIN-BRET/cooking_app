import axios from "axios";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
  const [data, setData] = useState([]);

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=beef")
      .then((res) => setData(res.data.meals))
  }, []);

  return (
    <div>
      <ul className="recipes">
      {data.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
      </ul>
    </div>
  );
};

export default Recipes;

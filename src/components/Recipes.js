import axios from "axios";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((res) => setData(res.data.meals));
  }, [search]);

  return (
    <div className="recipes">
      <div className="search">
        <h3 className="search_title">Rechercher un plat :</h3>
        <input
          className="search_input"
          type="text"
          placeholder="Chercher un plat ou un ingrédient ..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="gallery">
        {data.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default Recipes;

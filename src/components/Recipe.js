import React from 'react';

const Recipe = ({recipe}) => {
    return (
        <li className='recipe'>
            <h2>{recipe.strMeal}</h2>
            <p>Origine : {recipe.strArea}</p>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </li>
    );
};

export default Recipe;
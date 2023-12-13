import React from 'react';

const Recipe = ({recipe}) => {
    return (
        <li className='recipe'>
            <h2 className='recipe_title'>{recipe.strMeal}</h2>
            <p className='recipe_origin'>Origine : {recipe.strArea}</p>
            <img className="recipe_image" src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p className='recipe_instructions'>{recipe.strInstructions}</p>
        </li>
    );
};

export default Recipe;
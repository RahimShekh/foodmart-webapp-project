import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

function Receipe() {
  const {data} = useContext(recipeContext);

  const renderRecipes = data.map((recipe)=>(
      <RecipeCard key={recipe.id} recipe={recipe} />
  ))
  return (
    <div className='flex flex-wrap gap-10'>
      {data.length > 0 ? renderRecipes : "No Recipes found"}
    </div>
  )
}

export default Receipe
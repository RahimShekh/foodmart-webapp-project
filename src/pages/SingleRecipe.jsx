import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { recipeContext } from '../context/RecipeContext';

function SingleRecipe() {
  const {data} = useContext(recipeContext);
  const params = useParams();

  const recipe = data.find(recipe => params.id == recipe.id)
  return recipe ? (
  <div>
    <div className='left w-1/2 p-2'>
    <h1 className='text-5xl'>{recipe.title}</h1>
    <img className='w-30 h-20'
    src={recipe.image} alt="" />
    </div>
    <div className='right w-1/2 p-2'></div>
    
    
  </div>): ("loading...")
}

export default SingleRecipe
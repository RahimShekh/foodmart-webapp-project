import React from 'react'
import {Link} from "react-router-dom";

function RecipeCard(props) {
    const {id,image,title,description,chef} = props.recipe;
    console.log(props)

   return (
    <Link to={`/recipes/details/${id}`} 
    className='block w-40 duration-50 hover:scale-105 rounded-md overflow-hidden'>
        <img className='object-cover w-full h-30' 
        src={image} alt="" />
        <h1 className='font-bold mt-2'>{title}</h1>
        <small>{chef}</small>
        <p>{description.slice(0,100)}
        ...<small className="text-blue-400">more</small></p>

    </Link>
  )
}

export default RecipeCard
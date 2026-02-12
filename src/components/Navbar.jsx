import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center items-center gap-10 text-sm mb-10'>
        <NavLink className={(e)=>e.isActive ? "text-red-300":""} to="/">Home</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300":""} to="/recipes">Recipes</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300":""} to="/about">About</NavLink>
        <NavLink className={(e)=>`${e.isActive ? "text-red-300":""} px-3 py-2 bg-gray-900 rounded-md`} to="/create-recipe">Create Recipe</NavLink>
        
    </div>
  )
}

export default Navbar
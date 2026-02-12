import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {nanoid} from "nanoid";
import { recipeContext } from '../context/RecipeContext';

function Create() {
    const {data,setData} = useContext(recipeContext)

    const {register,handleSubmit,reset} = useForm();

    const SubmitHandler = (recipe)=>{
        recipe.id = nanoid();
        // console.log(recipe)

        setData([...data,recipe])

        reset();
    }
  return (
    <div>
        <form onSubmit={handleSubmit(SubmitHandler)}>  
            <input className='border-b outline-0 p-2 block'
            {...register("image")}  
            type="url" placeholder='Enter image url'/>
            <small className='text-red-400'>This how the error is shown</small>
            <input className='border-b outline-0 p-2 block'
            {...register("title")}  
            type="text" placeholder='Recipe title' />
            <textarea className='border-b outline-0 p-2 block'
            {...register("description")}   placeholder='Write Description' />
            <textarea className='border-b outline-0 p-2 block'
            {...register("ingredients")}  placeholder='Write ingredients' />
            <textarea className='border-b outline-0 p-2 block'
            {...register("instruction")}  placeholder='Write instruction' />
            <select
            className='border-b outline-0 p-2 block'
            {...register("Categorys")}  >
                <option value="cat-1">Categorys-1</option>
                <option value="cat-2">Categorys-2</option>
                <option value="cat-3">Categorys-3</option>
            </select>
            <button className='mt-5 block bg-gray-900 px-3 py-2 rounded-md'>Save Recipe</button>
        </form>
    </div>
  )
}

export default Create
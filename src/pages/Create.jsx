import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {nanoid} from "nanoid";
import { recipeContext } from '../context/RecipeContext';
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';

function Create() {
    const navigate = useNavigate();
    const {data,setData} = useContext(recipeContext)

    const {register,handleSubmit,reset} = useForm();

    const SubmitHandler = (recipe)=>{
        recipe.id = nanoid();
        // console.log(recipe)

        setData([...data,recipe])
        toast.success("New recipe created")
        reset();
        navigate("/recipes");
    }
  return (
    <div>
        <form onSubmit={handleSubmit(SubmitHandler)}>  
            <input 
            className='border-b outline-0 p-2 block'
            {...register("image")}  type="url"
             placeholder='Enter image url'/>
            <small className='text-red-400'>This how the error is shown</small>
            <input className='border-b outline-0 p-2 block'
            {...register("title")}  
            type="text" placeholder='Recipe title' />
            <input className='border-b outline-0 p-2 block'
            {...register("chef")}  
            type="text" placeholder='Chef Name' />
            <textarea className='border-b outline-0 p-2 block'
            {...register("description")}   placeholder='Write Description' />
            <textarea className='border-b outline-0 p-2 block'
            {...register("ingredients")}  placeholder='Write ingredients' />
            <textarea className='border-b outline-0 p-2 block'
            {...register("instruction")}  placeholder='Write instruction' />
            <select
            className='border-b outline-0 p-2 block bg-gray-700'
            {...register("Categorys")}  >
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="supper">supper</option>
                <option value="dinner">dinner</option>
            </select>
            <button className='mt-5 block bg-gray-900 px-3 py-2 rounded-md'>Save Recipe</button>
        </form>
    </div>
  )
}

export default Create
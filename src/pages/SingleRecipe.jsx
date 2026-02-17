import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipeContext } from '../context/RecipeContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


function SingleRecipe() {
  const {data,setData} = useContext(recipeContext)
  const params = useParams();
  const recipe = data.find(recipe => params.id == recipe.id)
  const navigate = useNavigate();

    const {register,handleSubmit,reset} = useForm({
      defaultValues:{
        title : recipe.title,
        chef : recipe.chef,
        image: recipe.image,
        description:recipe.description
      }
    });

    const SubmitHandler = (recipe)=>{
        const index = data.findIndex((recipe)=>params.id == recipe.id)
        
        const copydata = [...data];
        copydata[index] = {...copydata[index],...recipe}
        console.log(copydata[index]);
        setData(copydata);
        toast.success("recipe updated")

    }
    

  const deleteHandler= () =>{
    const filterdata = data.filter((r)=> r.id != params.id);
    setData(filterdata);
    toast.success("recipe deleted");
    navigate("/recipes")
  }
  return recipe ? (
  <div className='flex bg-gray-800 rounded-md'>
    <div className='left w-1/2 p-2'>
    <h1 className='text-5xl'>{recipe.title}</h1>
    <img className='w-30 h-20'
    src={recipe.image} alt="" />
    <h1>{recipe.chef}</h1>
    </div>
    <form className=' right w-1/2 p-2 ' onSubmit={handleSubmit(SubmitHandler)}>  
            <input 
            className='border-b outline-0 p-2 block'
            {...register("image")}      type="url"
             placeholder='Enter image url'/>
            <small className='text-red-400'>This how the error is shown</small>
            <input className='border-b outline-0 p-2 block'
            {...register("title")}      type="text" placeholder='Recipe title' />
            <input className='border-b outline-0 p-2 block'
            {...register("chef")}            type="text" placeholder='Chef Name' />
            <textarea className='border-b outline-0 p-2 block'
            {...register("description")}  placeholder='Write Description' />
            <textarea className='border-b outline-0 p-2 block'
            {...register("ingredients")}   placeholder='Write ingredients' />
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
            <button className='mt-5 block bg-gray-900 px-3 py-2 rounded-md'>Update Recipe</button>
            <button onClick={deleteHandler}
            className='mt-5 block bg-red-900 px-3 py-2 rounded-md'>Delete Recipe</button>

        </form>
    
    
  </div>): ("loading...")
}

export default SingleRecipe
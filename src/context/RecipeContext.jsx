import React, { createContext, useState } from 'react'

export const recipeContext = createContext(null);

function RecipeContext(props) {
    const [data,setData] = useState([{
      id:1,
      image:"https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8fDA%3D",
      title:"Indian pizza",
      chef: "Chef Rahim",
      description:"Tasty Pizza,Spicy pizza",
      ingredients:"pepper,indian spice, cheeze,salt",
      instruction:"visit shop",
      Categorys:"dinner"
    }]);
    console.log(data);
  return (
    <recipeContext.Provider value={{data,setData}}>
        {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContext
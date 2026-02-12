import React from 'react'
import {Route,Routes} from "react-router-dom";
import Home from '../pages/Home';
import Receipe from '../pages/Receipe';
import About from '../pages/About';
import Create from '../pages/Create';

function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipes' element={<Receipe/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/create-recipe' element={<Create/>} />
    </Routes>
  )
}

export default MainRoutes
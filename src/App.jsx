import { useState } from 'react'
import Layout from './layout/Layout'
import './App.css'
import RecipeDetail from './components/RecipeDetail'
import { Routes, Route } from 'react-router-dom'
import RecipeList from './components/RecipeList'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<RecipeList />} />
          <Route path='recipedetail/:recipeid' element={<RecipeDetail />} />
       
      </Route>
    </Routes>
   

    </>
  )
}

export default App

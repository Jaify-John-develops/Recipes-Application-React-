import { useState } from 'react'
import Layout from './layout/Layout'
import './App.css'
import { Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* <Route index element={<h1>Home Page</h1>} />
        <Route path='addrecipe' element={<h1>Add Recipe Page</h1>} /> */}
      </Route>
    </Routes>
   

    </>
  )
}

export default App

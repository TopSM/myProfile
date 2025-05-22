import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React, { useState } from 'react'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/PageNotFound'
import MainLayouts from './Layouts/MainLayout'
// import GalleryPage from './Pages/GalleryPage'
import './StylesCSS/Main.css'
import PoemsPage from './Pages/PoemsPage'
import MoviePage from './Pages/MoviePage'
// import basicColors from './Components/Builds/basicColors'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<HomePage />} />      
      <Route path="mypoems" name="mypoems" element={<PoemsPage />} />
      <Route path='*' element={<NotFound />} />
      <Route path='movielist' name="movieslist" element={<MoviePage/>} />
      {/* <Route path='/MyGallery' element={<GalleryPage />} /> */}
    </Route>

  ),
  { basename: '/myProfile/' }
)

const App = () => {
  return (
  <div>
    <RouterProvider router={router} />
  </div>
  )
}

export default App
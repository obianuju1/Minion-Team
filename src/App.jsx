import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { Link } from 'react-router-dom'
import { useRoutes } from 'react-router-dom';
import CreatePost from './Pages/CreatePost'
import DisplayPost from './Pages/DisplayPost'
import UpdatePost from './Pages/UpdatePost'
import Home from './Pages/Home'
import minion from './Pages/img/minion-cute.gif'

import { createClient } from '@supabase/supabase-js'
import PostDetails from './Pages/PostDetails';

const supabaseUrl = 'https://yyjnbrvuhnpavcrbnwrb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5am5icnZ1aG5wYXZjcmJud3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MzcyMDIsImV4cCI6MjAyODAxMzIwMn0.qRfKswbKhok3qhOKqoRZm1jppiqVHbUU2EZ3uV0Q3Nk'
const supabase = createClient(supabaseUrl, supabaseKey)
export { supabase }
function App() {
  let element = useRoutes([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/create",
      element:<CreatePost/>
    },
    {
      path:"/gallery",
      element:<DisplayPost/>
    },
    {
      path:"/edit/:id",
      element:<UpdatePost/>
    },
    {
      path:"/details/:id",
      element:<PostDetails/>
    }
  ])
  
  return (
    <>
  <div className="Home">
     
      <div className="SideBar">
          <Link to="/" className="link"><p>Home</p></Link>
          <Link to="/create" className="link"><p>Create a Minion</p></Link>
          <Link to="/gallery" className="link"><p> Minion Gallery</p></Link>
          <div className="image">
            <img src={minion} alt="minion"/>
          </div>
      </div>
      <div className="MainPage">
      {element}
      </div>
        </div>

    </>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Event from './pages/Events.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Hero from './pages/Hero.jsx'
import Signup from './pages/Signup.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter,BrowserRouter as Rooter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero/>
  },
  {
    path: "/events",
    element: <Event/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
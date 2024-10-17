import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Event from './pages/Events.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Hero from './pages/Hero.jsx'
import Signup from './pages/SignUp.jsx'
import AdminDashboard from './dashboards/roles/Admin/Admin.jsx'
import StudentDashboard from './dashboards/Student.jsx'
import TeacherDashboard from './dashboards/Teacher.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter,BrowserRouter as Rooter } from 'react-router-dom'
import AdminRouter from './dashboards/routes/Admin.jsx'

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
  },
  {
    path: "/dashboard/student",
    element: <StudentDashboard/>
  },
  {
    path: "/dashboard/teacher",
    element: <TeacherDashboard/>
  },
  ...AdminRouter,
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
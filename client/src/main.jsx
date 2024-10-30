import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Event from './pages/Events.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Hero from './pages/Hero.jsx'
import Signup from './pages/SignUp.jsx'
import StudentDashboard from './dashboards/roles/Student/Student.jsx'
import TeacherDashboard from './dashboards/roles/Teacher/TeacherDashboard.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AdminRoutes from './dashboards/routes/AdminRoutes.jsx'
import DashboardLayout from './dashboards/Layout.jsx'
import StudentRoutes from './dashboards/routes/StudentRoutes.jsx'
import TeacherRoutes from './dashboards/routes/TeacherRoutes.jsx'

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
  {
    path: "/admin",
    element: <DashboardLayout role="admin" />,
    children: AdminRoutes,  // These will be rendered inside the Outlet
  },
  {
    path: "/student",  // Changed from /dashboard/student
    element: <DashboardLayout role="student" />,
    children: StudentRoutes,
  },
  {
    path: "/teacher",
    element: <DashboardLayout role="teacher" />,
    children: TeacherRoutes,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

// Main file for routes configuration
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Event from './pages/Events.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Hero from './pages/Hero.jsx';
import Signup from './pages/SignUp.jsx';
import './index.css'
import ProtectedRoutes from './ProtectedRoutes.jsx';
import StudentRoutes from './dashboards/routes/StudentRoutes.jsx';
import TeacherRoutes from './dashboards/routes/TeacherRoutes.jsx';
import AdminRoutes from './dashboards/routes/AdminRoutes.jsx';
import DashboardLayout from './dashboards/Layout.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ResetPassword from './pages/ResetPassword.jsx';
import Unauthorized from './pages/Unauthorized.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />
  },
  {
    path: "/events",
    element: <Event />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/admin",
    element: <ProtectedRoutes allowedRoles={['ADMIN']} />,  // Wrap Admin routes with ProtectedRoute
    children: AdminRoutes,
  },
  {
    path: "/student",
    element: <ProtectedRoutes allowedRoles={['STUDENT']} />,  // Wrap Student routes with ProtectedRoute
    children: StudentRoutes,
  },
  {
    path: "/teacher",
    element: <ProtectedRoutes allowedRoles={['TEACHER']} />,  // Wrap Teacher routes with ProtectedRoute
    children: TeacherRoutes,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

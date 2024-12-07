// ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ allowedRoles }) => {
  const token = sessionStorage.getItem('jwtToken');
  const userRole = token!=null ? jwtDecode(token).role.substring(5).toUpperCase():"";
  console.log(userRole);

  if (!token) {
    // Redirect to login if no token is found
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole) && userRole !== 'ADMIN') {
    // Redirect to an unauthorized page if role does not match
    return <Navigate to="/unauthorized" replace />;
  }

  // Render the children (Outlet) if token is valid and role is allowed
  return <Outlet />;
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

export default ProtectedRoute;

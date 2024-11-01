// ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ allowedRoles }) => {
  const token = sessionStorage.getItem('jwtToken');
  const userRole = sessionStorage.getItem('role');

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

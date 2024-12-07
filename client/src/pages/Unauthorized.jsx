import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '@/assets/401.png';

export default function Unauthorized() {
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '24px',
    position: 'relative',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div style={backgroundStyle}>
      <button 
        style={buttonStyle} 
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
}

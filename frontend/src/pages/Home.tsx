import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const directToLogin = () => {
    console.log('clicked')
    navigate('/login');
  }

  return (
    <div>
      <button className='bg-red-200' onClick={directToLogin}>Go to login page</button>
    </div>
  );
};

export default HomePage;
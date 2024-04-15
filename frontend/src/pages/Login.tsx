import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const LoginPage = () => {
  useEffect(() => {
    console.log('access')
  }, []);

  return (
    <div className='bg-red-50'>
      Login page!
    </div>
  );
};

LoginPage.propTypes = {
  
};

export default LoginPage;

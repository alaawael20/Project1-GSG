import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../../router/pathes';

const NotFound = () => {
  return (
    <div className='container'>
      <h1 className='error-code'>404</h1>
      <p className='error-message'>Page not found</p>
      <Link to={PATHS.HOME} className='back-link'>Go Back</Link>
    </div>
  );
};

export default NotFound;

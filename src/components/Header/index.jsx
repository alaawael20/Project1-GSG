import React from 'react';
import './style.css';
import { Typography } from '../Typography';
import { Link } from 'react-router-dom';
import { PATHS } from '../../router/pathes';
import { useAuthContext } from '../../context/AuthContext';

const Header = () => {
  const { user } = useAuthContext();
  return (
    <header className='header'>
      <div className='profile_name'>
        <Typography variant={'h4'}>Welcome back,</Typography>
        <Typography variant={'h4'}>{user?.name} ! </Typography>
      </div>
      <div className='profile_img'>
        <Link to={PATHS.PROFILE}>
          <img src='assets/myprofile.jpg' alt='profile pic' />
        </Link>
      </div>
    </header>
  );
};

export default Header;

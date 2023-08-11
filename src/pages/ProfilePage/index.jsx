import React from 'react';
import './style.css';
import { Typography } from '../../components/Typography';
import { useAuthContext } from '../../context/AuthContext';

const ProfilePage = () => {
  const { user } = useAuthContext();
  return (
    <div className='profile'>
      <div className='profile_img'>
        <img src='assets/myprofile.jpg' alt='profile pic' />
      </div>
      <div className="text">
        <Typography variant={'h3'}>Username: {user?.name}</Typography>
        <Typography variant={'h3'}>Email: {user?.email} </Typography>
        <Typography variant={'h3'}>
          IsAdmin:
          {user?.isAdmin ? 'admin' : 'user'}
        </Typography>
      </div>
    </div>
  );
};

export default ProfilePage;

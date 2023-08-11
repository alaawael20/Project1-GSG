import React from 'react';
import './style.css';
import LeftSection from '../../components/Login/LeftSection';
import RightSection from '../../components/Login/RightSection';

const LoginPage = () => {
  return (
    <section className='loginPage'>
      <LeftSection />
      <RightSection />
    </section>
  );
};

export default LoginPage;

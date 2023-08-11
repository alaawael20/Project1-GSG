import React from 'react';
import './style.css';
import LeftSection from '../../components/SignUp/LeftSection';
import RightSection from '../../components/SignUp/RightSection';

const SignupPage = () => {
  return (
    <section className='SignUpPage'>
      <LeftSection />
      <RightSection />
    </section>
  );
};

export default SignupPage;

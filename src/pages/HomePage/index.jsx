import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import { THEMES } from '../../constants';

const HomePage = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`${'div_parent'} ${
        theme === THEMES.LIGHT ? 'light' : 'dark'
      }`}>
      <Sidebar />
      <span
        className={`${'line'} ${
          theme === THEMES.LIGHT ? 'line_light' : 'line_dark'
        }`}></span>
      <main className='main'>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default HomePage;

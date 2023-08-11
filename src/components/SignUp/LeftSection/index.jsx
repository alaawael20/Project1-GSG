import React from 'react';
import './style.css';
import Image from '../../Image';
import { Typography } from '../../Typography';

const LeftSection = () => {
  return (
    <div className='container'>
      <div className='right__div'>
        <div className='right__div__icon'>
          <Image ImageSrc='/assets/Group 3 (1).svg' />
          <Typography variant='h6'>Gamers</Typography>
        </div>
        <div className='right__div__f__image'>
          <Image ImageSrc='/assets/Group.svg' />
        </div>
        <div className='right__div__text'>
          <div className='qout'>“</div>
          <Typography variant='body1'>
            I always observe the people who pass by when I ride an escalator.
            I'll never see most of them again, so I imagine a lot of things
            about their lives... about the day ahead of them.
          </Typography>
          <Typography variant='h4'>Hideo Kojima</Typography>
        </div>
        <div className='right__div__image'>
          <Image ImageSrc='/assets/Vector 1.svg' />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

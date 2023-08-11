/* eslint-disable eqeqeq */
import React from 'react';
import styles from './style.module.css';
import { Typography } from '../Typography';

const Card = ({ bg, hero, title, text, name }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card_background}
        src={bg}
        alt='dragon background'
      />
      {name == 'spiderman' ? (
        <img className={styles.hero_spider} src={hero} alt='dragon hero' />
      ) : (
        <img
          className={name == 'superman' ? styles.hero_super : styles.hero}
          src={hero}
          alt='dragon hero'
        />
      )}
      {title && (
        <img className={styles.card_title} src={title} alt='dragon title' />
      )}

      <div className={styles.card_text}>
        <Typography variant={'h4'}>{text}</Typography>
      </div>
    </div>
  );
};

export default Card;

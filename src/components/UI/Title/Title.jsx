import React from 'react';
import css from './Title.module.css';

const Title = ({ text }) => {
  return (
    <div className={css.title__container}>
      <h2 className={css.title__text}>{text}</h2>
    </div>
  );
};

export default Title;

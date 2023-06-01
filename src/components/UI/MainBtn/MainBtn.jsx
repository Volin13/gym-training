import React from 'react';
import css from './MainBtn.module.css';

const Button = ({ text }) => {
  return (
    <div className={css.btn__container}>
      <button type="button" className={css.btnStyleActive}>
        {text}
      </button>
    </div>
  );
};
export default Button;

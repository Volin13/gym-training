import React from 'react';
import css from './Button.module.css';

const Button = ({ text, mainBtn, secondaryBtnStyle = '' }) => {
  return (
    <div className={mainBtn ? css.btn__container : secondaryBtnStyle}>
      <button className={css.btnStyle}>{text}</button>
    </div>
  );
};
export default Button;

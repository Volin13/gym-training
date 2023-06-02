import React from 'react';
import css from './SecondaryBtn.module.css';

const SecondaryBtn = ({ text, activeColor, secondaryBtnConatiner = '' }) => {
  return (
    <div className={`${secondaryBtnConatiner} ${css.secondaryBtnConatiner}`}>
      <button
        type="button"
        className={`${css.secondaryBtn} ${
          activeColor ? css.btnStyleActive : css.btnStyleTransparent
        }`}
      >
        {text}
      </button>
    </div>
  );
};
export default SecondaryBtn;

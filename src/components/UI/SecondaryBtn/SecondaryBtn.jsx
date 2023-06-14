import React from 'react';
import css from './SecondaryBtn.module.css';
import PropTypes from 'prop-types';

const SecondaryBtn = ({
  text,
  activeColor,
  onClickFunc,
  secondaryBtnConatiner = '',
}) => {
  return (
    <div
      className={`${secondaryBtnConatiner} ${css.secondaryBtnConatiner}`}
    >
      <button
        onClick={onClickFunc}
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

SecondaryBtn.propTypes = {
  text: PropTypes.string,
  secondaryBtnConatiner: PropTypes.string,
  onClickFunc: PropTypes.func,
  activeColor: PropTypes.bool,
};

export default SecondaryBtn;

import React from 'react';
import css from './MainBtn.module.css';
import PropTypes from 'prop-types';

const MainBtn = ({ text, onClickFnc, type = 'button', disabled }) => {
  return (
    <div className={css.btn__container}>
      <button
        onClick={onClickFnc}
        type={type}
        className={css.btnStyleActive}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

MainBtn.propTypes = {
  text: PropTypes.string,
  onClickFnc: PropTypes.func,
};

export default MainBtn;

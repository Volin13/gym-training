import React from 'react';
import css from './Logo.module.css';

const Logo = ({ logoFormattingClass = '' }) => {
  return (
    <div className={logoFormattingClass}>
      <span className={css.logo}>spyro </span>
    </div>
  );
};
export default Logo;

import React from 'react';
import css from './Logo.module.css';
import PropTypes from 'prop-types';

const Logo = ({ logoFormattingClass = '' }) => {
  return (
    <div className={logoFormattingClass}>
      <span className={css.logo}>spyro </span>
    </div>
  );
};

Logo.propTypes = {
  logoFormattingClass: PropTypes.string,
};
export default Logo;

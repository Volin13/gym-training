import React from 'react';
import css from './StyledWrapper.module.css';

const StyledtWrapper = ({ children }) => {
  return <div className={css.styledWrapper__contaner}>{children}</div>;
};
export default StyledtWrapper;

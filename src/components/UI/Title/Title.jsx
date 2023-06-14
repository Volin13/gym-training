import React, { forwardRef } from 'react';
import css from './Title.module.css';
import PropTypes from 'prop-types';

const Title = forwardRef(function Title(props, ref) {
  const { text } = props;
  return (
    <div className={css.title__container} ref={ref}>
      <h2 className={css.title__text}>{text}</h2>
    </div>
  );
});

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;

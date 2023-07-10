import React, { useState } from 'react';
import css from './InstructorCard.module.css';
import PropTypes from 'prop-types';

const InstructorCard = ({
  name,
  position,
  legend,
  photo,
  photo2x,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={css.instructorCard__container}>
      <div
        onClick={handleToggleVisibility}
        className={`${css.instructor__image_format}`}
      >
        <picture>
          <source
            media="(min-width: 0px)"
            srcSet={`
        ${photo} 1x,
        ${photo2x} 2x`}
            type="image/png"
          />
          <img
            className={css.instructor__image_format}
            src={photo}
            alt="instructor"
          />
        </picture>
        <button
          onClick={handleToggleVisibility}
          className={`${css.instructor__LegendBtn} ${
            isVisible ? css.hidden : css.visible
          }`}
        >
          <p className={css.instructor__legend}>{legend}</p>
        </button>
      </div>
      <p className={css.instructor__name}>
        <button
          className={css.instructor__nameBtn}
          type="button"
          onClick={handleToggleVisibility}
        >
          {name}
        </button>
      </p>
      <span className={css.instructor__position}>{position}</span>
    </div>
  );
};

InstructorCard.propTypes = {
  instructorAvatar: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  instructorLegend: PropTypes.string,
};

export default InstructorCard;

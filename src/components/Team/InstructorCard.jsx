import React, { useState } from 'react';
import css from './InstructorCard.module.css';

const InstructorCard = ({
  instructorAvatar,
  name,
  position,
  instructorLegend,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={css.instructorCard__container}>
      {' '}
      <div className={`${instructorAvatar} ${css.instructor__image_format}`}>
        <button
          onClick={handleToggleVisibility}
          className={`${css.instructor__LegendBtn} ${
            isVisible ? css.hidden : css.visible
          }`}
        >
          <p className={css.instructor__legend}>{instructorLegend}</p>
        </button>
      </div>
      <p className={css.instructor__name}>{name}</p>
      <span className={css.instructor__position}>{position}</span>
    </div>
  );
};

export default InstructorCard;

import React from 'react';
import css from './InstructorCard.module.css';

const InstructorCard = ({ instructorAvatar, name, position }) => {
  return (
    <div className={css.instructorCard__container}>
      {' '}
      <div
        className={`${instructorAvatar} ${css.instructor__image_format}`}
      ></div>
      <p className={css.instructor__name}>{name}</p>
      <span className={css.instructor__position}>{position}</span>
    </div>
  );
};

export default InstructorCard;

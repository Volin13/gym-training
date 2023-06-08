import React from 'react';
import css from './ClassItem.module.css';
import { ReactComponent as StudentIcon } from '../../assets/images/MediaIcons/studentIcon.svg';
import { ReactComponent as TimerIcon } from '../../assets/images/MediaIcons/timerIcon.svg';
import SecondaryBtn from 'components/UI/SecondaryBtn/SecondaryBtn';

const ClassItem = ({
  clasesName,
  studentsQnt,
  discipline,
  classImage,
  duration,
  instructor,
  difficalty,
  noOfClasses,
}) => {
  return (
    <div className={css.classItem__thumb}>
      <div className={css.classItem__image}>
        <img src={classImage} alt={discipline} />
        <div className={css.classItem__imageBackground}></div>
      </div>
      <div className={css.classItem__mainPositioning}>
        <span className={css.classItem__discipline}>
          {discipline}
        </span>
        <div className={css.classItem__secondaryPositioning}>
          <span className={css.classItem__icon}>
            <StudentIcon />
          </span>
          <span>{studentsQnt} Students</span>
        </div>
      </div>
      <div className={css.classItem__mainPositioning}>
        <h3 className={css.classItem__clasesName}>{clasesName}</h3>
        <div className={css.classItem__secondaryPositioning}>
          <span className={css.classItem__icon}>
            <TimerIcon />
          </span>
          <span>{duration}</span>
        </div>
      </div>
      <p className={css.classItem__instructor}>
        Instructor: {instructor}
      </p>
      <ul className={css.classItem__list}>
        <li>No. of Classes: {noOfClasses}</li>
        <li>Difficalty: {difficalty}</li>
      </ul>
      <div className={css.classItem__btnGroup}>
        <SecondaryBtn
          text="Learn more"
          activeColor
          secondaryBtnConatiner={css.classItem__learnMoreBtn}
        />
        <SecondaryBtn
          text="Start a free trail"
          secondaryBtnConatiner={css.classItem__freeTrialBtn}
        />
      </div>
    </div>
  );
};
export default ClassItem;

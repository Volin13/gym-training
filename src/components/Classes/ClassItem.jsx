import React, { useState } from 'react';
import PropTypes from 'prop-types';

import css from './ClassItem.module.css';
import { ReactComponent as StudentIcon } from '../../assets/images/MediaIcons/studentIcon.svg';
import { ReactComponent as TimerIcon } from '../../assets/images/MediaIcons/timerIcon.svg';
import SecondaryBtn from 'components/UI/SecondaryBtn/SecondaryBtn';
import FreeTrialModal from 'components/UI/FreeTrialModal/FreeTrialModal';
import LearnMoreModal from 'components/UI/LearnMoreModal/LearnMoreModal';

const ClassItem = ({
  day,
  time,
  clasesName,
  studentsQnt,
  discipline,
  classImage,
  classImg2x,
  duration,
  instructor,
  difficalty,
  noOfClasses,
}) => {
  const [freeTrialModalIsOpen, setFreeTrialModalIsOpen] =
    useState(false);
  const [learnMoreModalIsOpen, setLearnMoreModalIsOpen] =
    useState(false);
  function openModal(name) {
    if (name === 'free trial') {
      setFreeTrialModalIsOpen(true);
      return;
    }
    if (name === 'learn more') {
      setLearnMoreModalIsOpen(true);
      return;
    }
  }

  function closeModal(name) {
    if (name === 'free trial') {
      setFreeTrialModalIsOpen(false);
      return;
    }
    if (name === 'learn more') {
      setLearnMoreModalIsOpen(false);
      return;
    }
    setFreeTrialModalIsOpen(false);
    setLearnMoreModalIsOpen(false);
    return;
  }
  return (
    <div className={css.classItem__thumb}>
      <div className={css.classItem__image}>
        <picture>
          <source
            media="(min-width: 0px)"
            srcSet={`
        ${classImage} 1x,
        ${classImg2x} 2x`}
            type="image/png"
          />
          <img
            className={css.classItem__picture}
            src={classImg2x}
            alt="gym class"
          />
        </picture>
        <div
          className={`${css.classItem__imageBackgroundItem} ${css.classItem__imageBackgroundItemFirst}`}
        ></div>
        <div
          className={`${css.classItem__imageBackgroundItem} ${css.classItem__imageBackgroundItemSecond}`}
        ></div>
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
          onClickFunc={() => openModal('learn more')}
          activeColor
          secondaryBtnConatiner={css.classItem__learnMoreBtn}
        />
        <LearnMoreModal
          modalIsOpen={learnMoreModalIsOpen}
          closeModal={closeModal}
          classImage={classImage}
          classImg2x={classImg2x}
          day={day}
          time={time}
          discipline={discipline}
          difficalty={difficalty}
        />
        <SecondaryBtn
          onClickFunc={() => openModal('free trial')}
          text="Start a free trail"
          secondaryBtnConatiner={css.classItem__freeTrialBtn}
        />
        <FreeTrialModal
          difficalty={difficalty}
          clasesName={discipline}
          modalIsOpen={freeTrialModalIsOpen}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};
ClassItem.propTypes = {
  clasesName: PropTypes.string,
  studentsQnt: PropTypes.string,
  discipline: PropTypes.string,
  classImage: PropTypes.string,
  duration: PropTypes.string,
  instructor: PropTypes.string,
  difficalty: PropTypes.string,
  noOfClasses: PropTypes.string,
};

export default ClassItem;

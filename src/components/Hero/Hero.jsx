import FreeTrialModal from 'components/UI/FreeTrialModal/FreeTrialModal';
import MainBtn from 'components/UI/MainBtn/MainBtn';
import React from 'react';
import { useState } from 'react';
import css from './Hero.module.css';

const Hero = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={css.heroImg}>
      <div className={css.heroText}>
        <h1 className={css.heroTitle}>
          <span className={css.styledText}> Unleash</span> your Inner
          Athlete
        </h1>
        <p className={css.heroLegend}>
          Get ready to sweat it out and achieve your fitness goals
          with our high-energy fitness classes! Our classes are
          designed to cater to all fitness levels and provide a fun
          and motivating environment to help you reach your peak
          performance.
        </p>
        <MainBtn onClickFnc={openModal} text="Start free trail" />
        <FreeTrialModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
        <div className={css.gradientBox}></div>
      </div>
    </div>
  );
};
export default Hero;

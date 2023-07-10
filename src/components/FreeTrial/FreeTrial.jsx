import React, { useState } from 'react';
import SecondaryBtn from 'components/UI/SecondaryBtn/SecondaryBtn';
import css from './FreeTrial.module.css';
import FreeTrialModal from 'components/UI/FreeTrialModal/FreeTrialModal';
import { useInView } from 'react-intersection-observer';

const FreeTrial = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({});

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div
      ref={ref}
      className={`${css.freeTrial__container} container ${
        inView && 'animate'
      }`}
    >
      <div>
        <h3 className={css.freeTrial__title}>
          Are you ready to change?
        </h3>
        <p className={css.freeTrial__text}>
          Challenge your strength. Stretch your body. Breathe easy.
          Our team of world-class instructors will empower
        </p>
      </div>
      <SecondaryBtn
        text="Start your Free Trial"
        secondaryBtnConatiner={css.freeTrial__freeTrialBtn}
        onClickFunc={openModal}
      />
      <FreeTrialModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};
export default FreeTrial;

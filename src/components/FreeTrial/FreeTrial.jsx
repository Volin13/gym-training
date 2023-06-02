import React from 'react';
import SecondaryBtn from 'components/UI/SecondaryBtn/SecondaryBtn';
import css from './FreeTrial.module.css';

const FreeTrial = () => {
  return (
    <div className={`${css.freeTrial__container} container`}>
      <div>
        <h3 className={css.freeTrial__title}>Are you ready to change?</h3>
        <p className={css.freeTrial__text}>
          Challenge your strength. Stretch your body. Breathe easy. Our team of
          world-class instructors will empower
        </p>
      </div>
      <SecondaryBtn
        text="Start your Free Trial"
        secondaryBtnConatiner={css.freeTrial__freeTrialBtn}
      />
    </div>
  );
};
export default FreeTrial;

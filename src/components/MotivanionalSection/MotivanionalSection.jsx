import React from 'react';
import css from './MotivanionalSection.module.css';
import Title from 'components/UI/Title/Title';
import CrossfitImage1x from '../../assets/images/MotivationalSection/CrossfitImg1x-min.jpg';
import CrossfitImage2x from '../../assets/images/MotivationalSection/CrossfitImg2x-min.jpg';

const MotivanionalSection = () => {
  return (
    <div
      className={`${css.motivationalSection__container} container`}
    >
      <Title text="Fit for your lifestyle" />
      <p className={css.motivationalSection__text}>
        Wake up with a sunrise meditation, sweat it out with lunchtime
        HIIT, or unwind with an evening flow. You’ll find movement for
        every mood with classes sorted by time, style, and skill
        level.
      </p>
      <div className={css.motivationalSection__image}>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`
          ${CrossfitImage1x} 1x,
          ${CrossfitImage2x} 2x`}
            type="image/png"
          />
          {/* 
      <source
        media="(min-width: 768px)"
        srcSet="
          https://dummyimage.com/640x320/81E6D9/1A202C.webp 1x,
          https://dummyimage.com/1280x640/81E6D9/1A202C.webp 2x"
        type="image/webp"
      />
      <source
        media="(min-width: 768px)"
        srcSet="
          https://dummyimage.com/640x320/81E6D9/1A202C.jpg 1x,
          https://dummyimage.com/1280x640/81E6D9/1A202C.jpg 2x"
      /> */}

          <source
            media="(min-width: 0px)"
            srcSet={`
        ${CrossfitImage1x} 1x,
        ${CrossfitImage2x} 2x`}
            type="image/png"
          />
          <img
            className={css.appAddImage}
            src={CrossfitImage2x}
            alt="Mobile app advertising"
          />
        </picture>
        <div
          className={`${css.motivationalSection__imageBackgroundItem} ${css.motivationalSection__imageBackgroundItemFirst}`}
        ></div>
        <div
          className={`${css.motivationalSection__imageBackgroundItem} ${css.motivationalSection__imageBackgroundItemSecond}`}
        ></div>
        <div
          className={css.motivationalSection__imageBackground}
        ></div>
      </div>
    </div>
  );
};

export default MotivanionalSection;

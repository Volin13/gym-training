import React, { forwardRef, useEffect, useState } from 'react';
import css from './DisciplinesList.module.css';
import PropTypes from 'prop-types';

const DisciplinesListItem = forwardRef(function DisciplinesListItem(
  props,
  ref
) {
  const {
    titleText,
    description,
    image = '',
    firstElRef,
    secondElRef,
    thirdElRef,
    fourthElRef,
  } = props;
  const [scaledFirstEl, scaleUpFirstEl] = useState(true);
  const [scaledSecondEl, scaleUpSecondEl] = useState(false);
  const [scaledThirdEl, scaleUpThirdEl] = useState(false);
  const [scaledFourth, scaleUpFourthEl] = useState(false);
  const [scaled, setScaledEl] = useState(false);

  useEffect(() => {
    const scaleUpEl = () => {
      console.log('tap');

      if (firstElRef) {
        setScaledEl(true);

        scaleUpFirstEl(true);
        scaleUpSecondEl(false);
        scaleUpThirdEl(false);
        scaleUpFourthEl(false);
        console.log('first');
        return;
      }
      if (secondElRef) {
        setScaledEl(true);

        scaleUpFirstEl(false);
        scaleUpSecondEl(true);
        scaleUpThirdEl(false);
        scaleUpFourthEl(false);
        console.log('second');
        return;
      }
      if (thirdElRef) {
        setScaledEl(true);

        scaleUpFirstEl(false);
        scaleUpSecondEl(false);
        scaleUpThirdEl(true);
        scaleUpFourthEl(false);
        console.log('third');
        return;
      }
      if (fourthElRef) {
        scaleUpFirstEl(false);
        setScaledEl(true);

        scaleUpSecondEl(false);
        scaleUpThirdEl(false);
        scaleUpFourthEl(true);
        console.log('fourth');
        return;
      }
      setScaledEl(false);

      return;
    };
    if (ref) {
      ref.current.addEventListener('mouseenter', scaleUpEl);
    }
    return () => {
      document.removeEventListener('mouseenter', scaleUpEl);
    };
  }, [
    setScaledEl,
    scaledFirstEl,
    scaledSecondEl,
    scaledThirdEl,
    scaledFourth,
    firstElRef,
    secondElRef,
    thirdElRef,
    fourthElRef,
    ref,
    scaled,
  ]);

  return (
    <div
      // onMouseOver={scaleUpEl}
      ref={ref}
      //   onMouseOut={scaleDownEl}
      className={`${css.disciplinesListItem__container} 
    ${
      scaled
        ? css.disciplinesListItem__containerScaled
        : css.disciplinesListItem__containerRegular
    }`}
    >
      <div
        className={`${css.disciplinesListItem__imageContainer} 
       ${
         scaled
           ? css.disciplinesListItem__imageContainerScaled
           : css.disciplinesListItem__imageContainerRegular
       }`}
      >
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`
          ${image} 1x,
          ${image} 2x`}
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
        ${image} 1x,
        ${image} 2x`}
            type="image/png"
          />
          <img
            className={`
            ${
              (scaled && scaledFirstEl) ||
              (scaled && scaledSecondEl) ||
              (scaled && scaledThirdEl) ||
              (scaled && scaledFourth)
                ? css.disciplinesListItem__imageScaled
                : css.disciplinesListItem__imageRegular
            }`}
            src={image}
            alt="Mobile app advertising"
          />
        </picture>
        <h3
          className={`${css.disciplinesListItem__imageContainer} 
       ${
         (scaled && scaledFirstEl) ||
         (scaled && scaledSecondEl) ||
         (scaled && scaledThirdEl) ||
         (scaled && scaledFourth)
           ? css.disciplinesListItem__demoTitleHide
           : css.disciplinesListItem__demoTitleShow
       }`}
        >
          {titleText}
        </h3>
      </div>
      <div style={{ display: scaled ? 'block' : 'none' }}>
        <div className={css.gradientBox}></div>
        <div className={css.disciplinesListItem__textBox}>
          <h3 className={css.disciplinesListItem__title}>
            {titleText}
          </h3>
          <p className={css.disciplinesListItem__description}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
});

DisciplinesListItem.propTypes = {
  titleText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  scaledFirstEl: PropTypes.bool,
};
export default DisciplinesListItem;

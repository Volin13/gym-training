import React, { forwardRef, useState } from 'react';
import css from './DisciplinesList.module.css';

const DisciplinesListItem = forwardRef(function DisciplinesListItem(
  props,
  ref
) {
  const { titleText, description, image = '' } = props;
  const [scaled, setScaledEl] = useState(false);
  const scaleUpEl = () => {
    setScaledEl(!scaled);
  };
  //   const scaleDownEl = () => {
  //     setScaledEl(false);
  //   };

  return (
    <div
      onMouseOver={scaleUpEl}
      //   onMouseEnter={scaleUpEl}
      //   onMouseOut={scaleDownEl}
      className={`${css.disciplinesListItem__container} 
    ${
      !scaled
        ? css.disciplinesListItem__containerRegular
        : css.disciplinesListItem__containerScaled
    }`}
    >
      <div
        className={`${css.disciplinesListItem__imageContainer} 
       ${
         !scaled
           ? css.disciplinesListItem__imageContainerRegular
           : css.disciplinesListItem__imageContainerScaled
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
              !scaled
                ? css.disciplinesListItem__imageRegular
                : css.disciplinesListItem__imageScaled
            }`}
            src={image}
            alt="Mobile app advertising"
          />
        </picture>
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

export default DisciplinesListItem;

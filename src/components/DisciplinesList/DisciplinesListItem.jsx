import React, { useRef } from 'react';
import css from './DisciplinesList.module.css';
import PropTypes from 'prop-types';

const DisciplinesListItem = ({
  titleText,
  description,
  imageDesktop,
  imageTablet,
  imageMobile,
  onMouseEnter,
  itemId,
  activeItemId,
}) => {
  const elRef = useRef(null);
  const BREAKPOINT_SMALL = 768;
  const windowWidth = window.innerWidth;
  let scaled = itemId === activeItemId;
  if (windowWidth < BREAKPOINT_SMALL) {
    scaled = itemId;
  }

  return (
    <div
      onMouseEnter={() => onMouseEnter(itemId)}
      onClick={() => onMouseEnter(itemId)}
      ref={elRef}
      className={`${css.disciplinesListItem__container} 
    ${
      scaled
        ? css.disciplinesListItem__containerScaled
        : css.disciplinesListItem__containerRegular
    }`}
    >
      <div
        className={`${css.gradientBox} ${
          scaled ? css.gradientScaled : css.gradientRegular
        }`}
      ></div>
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
          ${imageTablet} 1x,
          ${imageDesktop} 2x`}
            type="image/png"
          />

          <source
            media="(min-width: 768px)"
            srcSet={`
        ${imageMobile} 1x,
        ${imageTablet} 2x`}
            type="image/png"
          />

          <source
            media="(min-width: 0px)"
            srcSet={`
        ${imageMobile} 1x,
        ${imageTablet} 2x`}
            type="image/png"
          />
          <img
            className={`
            ${
              scaled
                ? css.disciplinesListItem__imageScaled
                : css.disciplinesListItem__imageRegular
            }`}
            src={imageTablet}
            alt="Sport discipline"
          />
        </picture>
        <h3
          className={`
       ${
         scaled
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
};

DisciplinesListItem.propTypes = {
  titleText: PropTypes.string,
  description: PropTypes.string,
  imageDesktop: PropTypes.string,
  imageTablet: PropTypes.string,
  imageMobile: PropTypes.string,
  onMouseEnter: PropTypes.func,
  itemId: PropTypes.string,
};
export default DisciplinesListItem;

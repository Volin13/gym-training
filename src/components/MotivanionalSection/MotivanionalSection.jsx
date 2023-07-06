import React from 'react';
import css from './MotivanionalSection.module.css';
import Title from 'components/UI/Title/Title';

const MotivanionalSection = ({
  motivationText,
  imageDesktop,
  imageTablet,
  imageMobile,
  itemId,
  activeItemId,
}) => {
  const showed = itemId === activeItemId;

  return (
    <>
      {showed && (
        <div
          className={`${css.motivationalSection__container} container`}
        >
          <Title text="Fit for your lifestyle" />
          <p className={css.motivationalSection__text}>
            {motivationText}
          </p>
          <div className={css.motivationalSection__image}>
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
        ${imageTablet} 1x,
        ${imageDesktop} 2x`}
              />

              <source
                media="(min-width: 0px)"
                srcSet={`
        ${imageMobile} 1x,
        ${imageTablet} 2x`}
                type="image/png"
              />
              <img
                className={css.appAddImage}
                src={imageTablet}
                alt="Sport discipline"
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
      )}
    </>
  );
};

export default MotivanionalSection;

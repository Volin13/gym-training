import React from 'react';
import css from './FeedBack.module.css';

const FeedBackItem = ({ feedBackText, starsCount, name, avatar }) => {
  return (
    <div className={css.feedBackItem__container}>
      <p className={css.feedBackItem__text}> {feedBackText}</p>
      <div className={css.feedBackItem__starsSection}></div>
      <div className={css.feedBackItem__personalSection}>
        <div className={css.feedBackItem__avatar}>
          <img src={avatar} alt={name} />
        </div>
        <p className={css.feedBackItem_name}>{name}</p>
      </div>
    </div>
  );
};

export default FeedBackItem;

import React from 'react';
import css from './FeedBack.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as StarIcon } from '../../assets/images/MediaIcons/star-svgrepo-com.svg';
const FeedBackItem = ({ feedBackText, starsCount, name, avatar }) => {
  const count = parseInt(starsCount);

  const renderStars = () => {
    const stars = [];

    for (let index = 0; index < 5; index++) {
      stars.push(
        <div
          key={index}
          className={css.feedBackItem__star}
          style={{ fill: count > index ? '#ff4601' : 'none' }}
        >
          <StarIcon />
        </div>
      );
    }

    return stars;
  };
  return (
    <div className={css.feedBackItem__container}>
      <p className={css.feedBackItem__text}> {feedBackText}</p>
      <div className={css.feedBackItem__starsSection}>
        {renderStars()}
      </div>
      <div className={css.feedBackItem__personalSection}>
        <div className={css.feedBackItem__avatar}>
          <img src={avatar} alt={name} />
        </div>
        <p className={css.feedBackItem_name}>{name}</p>
      </div>
    </div>
  );
};

FeedBackItem.propTypes = {
  feedBackText: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  starsCount: PropTypes.string,
};

export default FeedBackItem;

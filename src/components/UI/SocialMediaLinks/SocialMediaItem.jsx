import React from 'react';
import switchSocialLinkIcon from './switchSocialLinkIcon';
import PropTypes from 'prop-types';

const SocialMediaItem = ({ name, url, linkStyle }) => {
  return (
    <a
      className={linkStyle}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {switchSocialLinkIcon(name)}
    </a>
  );
};

SocialMediaItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  linkStyle: PropTypes.string,
};

export default SocialMediaItem;

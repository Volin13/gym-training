import React from 'react';
import switchSocialLinkIcon from './switchSocialLinkIcon';

export const SocialMediaItem = ({ name, url, linkStyle }) => {
  return (
    <a className={linkStyle} href={url} target="_blank" rel="noreferrer">
      {switchSocialLinkIcon(name)}
    </a>
  );
};

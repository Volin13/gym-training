import React from 'react';
import css from './SocialMediaLinks.module.css';
import SocialMediaItem from './SocialMediaItem';

export const SocialMediaLinks = () => {
  return (
    <div className={css.socialMediaListFormat}>
      <ul className={css.socialMediaList}>
        <li className={css.socialMediaListItem}>
          <SocialMediaItem
            name="facebook"
            url="https://www.facebook.com/"
            linkStyle={css.socialMedialink}
          />
        </li>
        <li className={css.socialMediaListItem}>
          <SocialMediaItem
            name="twitter"
            url="https://twitter.com/?lang=ua"
            linkStyle={css.socialMedialink}
          />
        </li>
        <li className={css.socialMediaListItem}>
          <SocialMediaItem
            name="instagram"
            url="https://www.instagram.com/"
            linkStyle={css.socialMedialink}
          />
        </li>
        <li className={css.socialMediaListItem}>
          <SocialMediaItem
            name="tiktok"
            url="https://www.tiktok.com/uk-UA/"
            linkStyle={css.socialMedialink}
          />
        </li>
      </ul>
    </div>
  );
};

import React from 'react';
import css from './DownloadApp.module.css';
import { ReactComponent as GooglePlayIcon } from '../../assets/images/MediaIcons/googlePlay.svg';
import { ReactComponent as AppleStoreIcon } from '../../assets/images/MediaIcons/appleStore.svg';

const DownloadApp = () => {
  return (
    <div className={`${css.downloadApp__container} container`}>
      <h2 className={css.downloadApp__title}>
        Download the most loved fitness app
      </h2>
      <p className={css.downloadApp__text}>
        Start your fitness journey with us. Join the cult!
      </p>
      <a
        className={css.downloadApp__links}
        href="https://play.google.com/store/games"
      >
        <GooglePlayIcon />
      </a>
      <a className={css.downloadApp__links} href="https://www.apple.com/store">
        <AppleStoreIcon />
      </a>
    </div>
  );
};
export default DownloadApp;

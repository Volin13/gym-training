import React from 'react';
import css from './DownloadApp.module.css';
import { ReactComponent as GooglePlayIcon } from '../../assets/images/MediaIcons/googlePlay.svg';
import { ReactComponent as AppleStoreIcon } from '../../assets/images/MediaIcons/appleStore.svg';
import appAddDesktop1x from '../../assets/images/downloadApp/desktopAppAdvertising1x-min.png';
import appAddDesktop2x from '../../assets/images/downloadApp/desktopAppAdvertising2x-min.png';

const DownloadApp = () => {
  return (
    <div className={`${css.downloadApp__container} container`}>
      <h2 className={css.downloadApp__title}>
        Download the most loved fitness app
      </h2>
      <p className={css.downloadApp__text}>
        Start your fitness journey with us. Join the cult!
      </p>
      <div>
        <a
          className={css.downloadApp__links}
          href="https://play.google.com/store/games"
        >
          <GooglePlayIcon />
        </a>
        <a
          className={css.downloadApp__links}
          href="https://www.apple.com/store"
        >
          <AppleStoreIcon />
        </a>
      </div>

      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`
          ${appAddDesktop1x} 1x,
          ${appAddDesktop2x} 2x`}
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
        ${appAddDesktop1x} 1x,
        ${appAddDesktop2x} 2x`}
          type="image/png"
        />
        <img
          className={css.appAddImage}
          src={appAddDesktop2x}
          alt="Mobile app advertising"
        />
      </picture>
    </div>
  );
};
export default DownloadApp;

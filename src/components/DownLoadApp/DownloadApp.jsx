import React from 'react';
import css from './DownloadApp.module.css';
import { ReactComponent as GooglePlayIcon } from '../../assets/images/MediaIcons/googlePlay.svg';
import { ReactComponent as AppleStoreIcon } from '../../assets/images/MediaIcons/appleStore.svg';
import appAddDesktop1x from '../../assets/images/downloadApp/desktopAppAdvertising1x-min.png';
import appAddDesktop2x from '../../assets/images/downloadApp/desktopAppAdvertising2x-min.png';
import { useInView } from 'react-intersection-observer';

const DownloadApp = () => {
  const [ref, inView] = useInView({});

  return (
    <div className={`${css.downloadApp__container} container`}>
      <div ref={ref} className={`${inView && 'animate'}`}>
        <h2 className={css.downloadApp__title}>
          Download the most loved fitness app
        </h2>
        <p className={css.downloadApp__text}>
          Start your fitness journey with us. Join the cult!
        </p>
        <div className={css.downloadApp__storeLinks}>
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
      </div>

      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`
          ${appAddDesktop1x} 1x,
          ${appAddDesktop2x} 2x`}
          type="image/png"
        />
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

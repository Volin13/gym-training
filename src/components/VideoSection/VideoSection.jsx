import React, { useRef, useState } from 'react';
import css from './VideoSection.module.css';
import YouTube from 'react-youtube';
import { ReactComponent as PlayIcon } from '../../assets/images/MediaIcons/ph_play-fill.svg';

const VideoSection = () => {
  const [hiddenPreview, setHiddenPreview] = useState(false);
  const playerRef = useRef(null);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
      enablejsapi: 1,
      controls: 0,
      modestbranding: 1,
      showinfo: 0,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
    },
  };
  const styles = {
    width: '100%',
    height: '548px',
  };

  const onPlayerReady = event => {
    if (hiddenPreview) {
      event.target.playVideo();
      event.target.setVolume(30);
      event.target.setPlaybackQuality('hd1080');
    }
  };
  const hendlePlayBtnClick = event => {
    setHiddenPreview(true);
    if (playerRef.current) {
      playerRef.current.internalPlayer.playVideo();
    }
  };
  return (
    <div className={`${css.vidSection__container} container`}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <YouTube
          opts={opts}
          style={styles}
          videoId="wnHW6o8WMas"
          onReady={onPlayerReady}
          className={`${css.vidSection__youtubeVideo}`}
          ref={playerRef}
        />
        <div
          style={{ display: hiddenPreview ? 'none' : 'block' }}
          className={css.vidSection__mockPreview}
        >
          <button
            type="button"
            onClick={hendlePlayBtnClick}
            className={css.vidSection__mockBtn}
          >
            <PlayIcon />
            <div className={css.vidSection__mockBtn_thumb}></div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;

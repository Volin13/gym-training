import React from 'react';
import css from './VideoSection.module.css';
import YouTube from 'react-youtube';
const VideoSection = () => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
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
    // event.target.playVideo();
    event.target.setVolume(30);
    event.target.setPlaybackQuality('hd1080');
  };
  return (
    <div className={`${css.vidSection__container} container`}>
      <YouTube
        opts={opts}
        style={styles}
        videoId="wnHW6o8WMas"
        onReady={onPlayerReady}
        className={`${css.vidSection__youtubeVideo}`}
      />
    </div>
  );
};
export default VideoSection;

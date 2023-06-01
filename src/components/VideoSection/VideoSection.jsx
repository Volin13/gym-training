import React from 'react';
import css from './VideoSection.module.css';
import YouTube from 'react-youtube';
const VideoSection = () => {
  const opts = {
    height: '548',
    width: '1200',
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
  const onPlayerReady = event => {
    event.target.playVideo();
    event.target.setVolume(50);
    event.target.setPlaybackQuality('hd1080');
  };
  return (
    <div className={`${css.vidSection__container} container`}>
      <YouTube
        opts={opts}
        videoId="wnHW6o8WMas"
        onReady={onPlayerReady}
        className={`${css.vidSection__youtubeVideo}`}
      />
    </div>
  );
};
export default VideoSection;

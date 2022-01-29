import React, { useEffect, useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';
import VideoJS from '../VideoJs/VideoJS';
import poster_video from 'asset/img/poster_video.jpg';

AnimeWatch.propTypes = {};

function AnimeWatch(props) {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  const playerRef = React.useRef(null);
  const handleBack = () => {
    // dispatch(resetListEpisode());
    navigate(-1);
  };

  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    preload: 'metadata',
    liveui: true,
    poster: poster_video,

    sources: [
      {
        src: `${state.episodeLink}`,
        type: 'video/mp4',
      },
    ],
  };
  const el = useRef(null);

  useEffect(() => {
    el.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  });
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  return (
    <div>
      <div className="animeLink" ref={el}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        <ArrowBackIcon onClick={handleBack} />
      </div>
    </div>
  );
}

export default AnimeWatch;

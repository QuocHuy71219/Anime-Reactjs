import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

Episode.propTypes = {
  episode: PropTypes.object,
};

const useStyles = makeStyles({
  root: {
    color: '#fff',
    border: '2px solid #1a1a20',
    margin: '0 5px 5px 0',
    background: '#23232a',
    '&:hover': {
      background:
        'linear-gradient(140deg, rgba(27, 27, 27, 0.25) 0%, rgba(128, 49, 0, 0.7) 50%, rgba(179, 68, 0, 0.85) 75%, rgba(255, 98, 0, 0.9) 100%)',
      transition: 'all 1s ease-out',
    },
  },
});

function Episode({ episode = null }) {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleChangeUrl = () => {
    navigate(`/episode/${episode?.mal_id}`, { state: { episodeLink: episode?.url } });
  };
  return (
    <div onClick={handleChangeUrl}>
      {/* <video
        id="my-video"
        class="video-js"
        controls
        preload="auto"
        width="640"
        height="264"
        poster="MY_VIDEO_POSTER.jpg"
        data-setup="{}"
      >
        <source src={episodeList} type="video/mp4" />
      </video> */}
      <Button
        className={classes.root}
        //className="episode"
        // style={{
        //   color: '#fff',
        //   border: '2px solid #1a1a20',
        //   margin: '0 5px 5px 0',
        //   background: '#23232a',
        // }}
      >{`Tập ${episode?.mal_id}`}</Button>
    </div>
  );
}

export default Episode;

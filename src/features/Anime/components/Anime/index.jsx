//import { Box, Typography } from '@material-ui/core';
import { PlayCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
import './styles.scss';

Anime.propTypes = {
  anime: PropTypes.object,
};
function Anime({ anime }) {
  const navigate = useNavigate();

  const handleChangeUrl = () => {
    navigate(`/anime/${anime.id}`);
  };

  return (
    // <Box padding={1} onClick={handleClick}>
    //   <Box padding={1} minHeight="215px">
    //     <img src={anime.cover_image} alt={anime.titles.en} width="100%" />
    //   </Box>

    //   <Typography variant="body2">{anime.titles.en}</Typography>
    // </Box>
    <div className="anime" onClick={handleChangeUrl}>
      <div className="anime__img">
        <img src={anime.cover_image} alt={anime.titles.en} />
        <span>Tập {anime.episodes_count}</span>
        <div className="anime__img--icon">
          <PlayCircleOutline style={{ fontSize: '60px' }} />
        </div>
      </div>
      <div className="anime__title">{anime.titles.en}</div>
    </div>
  );
}

export default Anime;

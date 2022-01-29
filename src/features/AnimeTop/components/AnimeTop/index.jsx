//import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
import './styles.scss';

AnimeTop.propTypes = {
  anime: PropTypes.object,
};
function AnimeTop({ anime }) {
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
    <div className="top-anime" onClick={handleChangeUrl}>
      <div className="top-anime__img">
        <img src={anime.cover_image} alt={anime.titles.en} />
      </div>
      <div className="top-anime__title">{anime.titles.en}</div>
    </div>
  );
}

export default AnimeTop;

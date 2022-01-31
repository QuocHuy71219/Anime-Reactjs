//import { Box, Typography } from '@material-ui/core';
import { PlayCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

AnimeSearch.propTypes = {
  anime: PropTypes.object,
};

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

function AnimeSearch({ anime }) {
  const navigate = useNavigate();
  // const query = useQuery();
  // const q = String(query.get('q'));

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
    <div className="search-anime" onClick={handleChangeUrl}>
      <div className="search-anime__img">
        <img src={anime.cover_image} alt={anime.titles.en} />
        <span>Tập {anime.episodes_count}</span>
        <div className="search-anime__img--icon">
          <PlayCircleOutline style={{ fontSize: '60px' }} />
        </div>
      </div>
      <div className="search-anime__title">{anime.titles.en}</div>
    </div>
  );
}

export default AnimeSearch;

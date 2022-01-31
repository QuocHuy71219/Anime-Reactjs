//import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import AnimeSearch from '../AnimeSearch';
import './styles.scss';
AnimeSearchList.propTypes = {
  data: PropTypes.array,
};

// AnimeTopList.defaultProps = {
//   data: [],
// };

function AnimeSearchList({ data }) {
  return (
    // <Box>
    //   <Grid container>
    //     {data.map((anime) => (
    //       <Grid item key={anime.id} xs={12} sm={6} md={4} lg={3}>
    //         <Anime anime={anime} />
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>

    <ul className="list-anime">
      {data.map((anime, idx) => (
        <li key={idx}>
          <AnimeSearch anime={anime} />
        </li>
      ))}
    </ul>
  );
}

export default AnimeSearchList;

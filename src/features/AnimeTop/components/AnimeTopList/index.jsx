//import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import AnimeTop from '../AnimeTop';
import './styles.scss';
AnimeTopList.propTypes = {
  data: PropTypes.array,
};

// AnimeTopList.defaultProps = {
//   data: [],
// };

function AnimeTopList({ data }) {
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
          <AnimeTop anime={anime} />
        </li>
      ))}
    </ul>
  );
}

export default AnimeTopList;

//import { Box, Grid } from '@material-ui/core';
import SwiperCom from 'components/Swiper';
import PropTypes from 'prop-types';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Anime from '../Anime/index';
import './styles.scss';
AnimeList.propTypes = {
  data: PropTypes.array,
};

// AnimeList.defaultProps = {
//   data: [],
// };

function AnimeList({ data }) {
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
      <SwiperCom>
        {data.map((anime, idx) => (
          <SwiperSlide key={idx}>
            <li key={idx}>
              <Anime anime={anime} />
            </li>
          </SwiperSlide>
        ))}
      </SwiperCom>
    </ul>
  );
}

export default AnimeList;

// import { Box, Container, Grid, Paper } from '@material-ui/core';
// import { convertLength } from '@mui/material/styles/cssUtils';
//import { makeStyles } from '@material-ui/core';
import animeAPI from 'api/animeAPI';
import React, { useEffect, useState } from 'react';
import AnimeList from '../components/AnimeList';

ListPage.propTypes = {};

// const useStyles = makeStyles((theme) => ({
//   root: {
//     background: 'linear-gradient(to right,#ff8a00,#ff2070)',
//     backgroundClip: 'text',
//     color: 'transparent',
//   },
// }));

function ListPage(props) {
  //const classes = useStyles();

  const [animeList, setAnimeList] = useState([]);

  //const [loading, setLoading] = useState(true);
  // const [filters, setFilters] = useState(() => ({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 9,
  //   _sort: queryParams._sort || 'salePrice:ASC',
  // }));

  // useEffect(() => {
  //   //TODO: Sync filters to URL
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filters),
  //   });
  // }, [history, filters]);

  useEffect(
    () =>
      (async () => {
        try {
          const data = await animeAPI.getAnimelist(20);
          const result = data.data.documents;
          setAnimeList(result);
        } catch (error) {
          console.log('Failed to fetch anime list: ', error);
        }
        //setLoading(false);
      })(),
    []
  );

  return (
    <div style={{ padding: '20px' }}>
      {/* <Container>
        <Grid container spacing={1}>
          <Grid item>
            <Paper elevation={0}>
              <AnimeList data={animeList} />
            </Paper>
          </Grid>
        </Grid>
      </Container> */}
      <div style={{ width: '100%', borderBottom: '1px solid grey' }}>
        <h3
          style={{
            margin: '0',
            width: '150px',
            background: 'linear-gradient(to right,#ff8a00,#ff2070)',
            WebkitBackgroundClip: 'text',
            //backgroundClip: 'text',
            color: 'transparent',
            borderBottom: '2px solid red',
          }}
        >
          Mới cập nhật
        </h3>
      </div>

      <AnimeList data={animeList} />
      <div style={{ width: '100%', borderBottom: '1px solid grey' }}>
        <h3
          style={{
            margin: '0',
            width: '200px',
            background: 'linear-gradient(to right,#ff8a00,#ff2070)',
            WebkitBackgroundClip: 'text',
            //backgroundClip: 'text',
            color: 'transparent',
            borderBottom: '2px solid red',
          }}
        >
          Hôm nay xem gì?
        </h3>
      </div>
      <AnimeList data={animeList} />
      <div style={{ width: '100%', borderBottom: '1px solid grey' }}>
        <h3
          style={{
            margin: '0',
            width: '200px',
            background: 'linear-gradient(to right,#ff8a00,#ff2070)',
            WebkitBackgroundClip: 'text',
            //backgroundClip: 'text',
            color: 'transparent',
            borderBottom: '2px solid red',
          }}
        >
          Xem nhiều trong ngày
        </h3>
      </div>
      <AnimeList data={animeList} />
    </div>
  );
}

export default ListPage;

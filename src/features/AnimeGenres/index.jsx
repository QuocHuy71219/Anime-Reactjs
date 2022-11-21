import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import animeAPI from 'api/animeAPI';
import AnimeGenresList from './components/AnimeGenresList';
import { useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

AnimeGenresFutures.propTypes = {};

function AnimeGenresFutures(props) {
  const [animeList, setAnimeList] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [paginationCount, setPaginationCount] = useState(1);
  const location = useLocation();
  const { id } = location.state;

  useEffect(
    () =>
      (async () => {
        try {
          const data = await animeAPI.getListAnimeWithGenres(id, pagination);
          const result = data.data;
          //result.sort((a, b) => b.score - a.score);
          const result1 = data.pagination.items.total;
          //result.sort((a, b) => b.score - a.score);
          setAnimeList(result);
          setPaginationCount(result1);
        } catch (error) {
          console.log('Failed to fetch anime list: ', error);
        }
        //setLoading(false);
      })(),
    [id, pagination]
  );

  const handlePageChange = (e, page) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   _page: page,
    // }));
    setPagination(page);
  };

  return (
    <div>
      <AnimeGenresList data={animeList} />
      <div style={{ display: 'flex', justifyContent: 'center', background: 'grey' }}>
        <Stack spacing={2}>
          <Pagination
            color="primary"
            count={Math.ceil(paginationCount / 18)}
            page={pagination}
            onChange={handlePageChange}
          ></Pagination>
        </Stack>
      </div>
    </div>
  );
}

export default AnimeGenresFutures;

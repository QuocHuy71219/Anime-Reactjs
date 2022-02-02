import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import animeAPI from 'api/animeAPI';
import AnimeTopList from './components/AnimeTopList';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

AnimeTopFutures.propTypes = {};

function AnimeTopFutures(props) {
  const [animeList, setAnimeList] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [paginationCount, setPaginationCount] = useState(1);
  //const [filters, setFilters] = useState('1');

  useEffect(
    () =>
      (async () => {
        try {
          const data = await animeAPI.getAnimelist(pagination);
          const result = data.data.documents;
          const result1 = data.data.count;
          //result.sort((a, b) => b.score - a.score);
          setAnimeList(result);
          setPaginationCount(result1);
        } catch (error) {
          console.log('Failed to fetch anime list: ', error);
        }
        //setLoading(false);
      })(),
    [pagination]
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
      <AnimeTopList data={animeList} />
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

export default AnimeTopFutures;

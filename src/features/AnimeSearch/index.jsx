import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import animeAPI from 'api/animeAPI';
import AnimeSearchList from './components/AnimeSearchList';
import { useLocation } from 'react-router-dom';
import { Pagination, Stack } from '@mui/material';

AnimeSearchFutures.propTypes = {};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function AnimeSearchFutures(props) {
  const [animeList, setAnimeList] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [paginationCount, setPaginationCount] = useState(1);
  const query = useQuery();
  const q = String(query.get('q'));

  useEffect(
    () =>
      (async () => {
        try {
          const data = await animeAPI.searchAnime(q, pagination);
          const result = data.data;
          const result1 = data.pagination.items.total;
          setAnimeList(result);
          setPaginationCount(result1);
          //result.sort((a, b) => b.score - a.score);
        } catch (error) {
          console.log('Failed to fetch anime list: ', error);
        }
        //setLoading(false);
      })(),
    [q, pagination]
  );

  const divStyle = { minHeight: 'calc(100vh - 36.5px - 64px - 87px)' };

  const handlePageChange = (e, page) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   _page: page,
    // }));
    setPagination(page);
  };

  return (
    <div style={divStyle}>
      <AnimeSearchList data={animeList} />
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

export default AnimeSearchFutures;

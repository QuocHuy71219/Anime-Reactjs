import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import animeAPI from 'api/animeAPI';
import AnimeSearchList from './components/AnimeSearchList';
import { useLocation } from 'react-router-dom';

AnimeSearchFutures.propTypes = {};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function AnimeSearchFutures(props) {
  const [animeList, setAnimeList] = useState([]);
  const query = useQuery();
  const q = String(query.get('q'));

  useEffect(
    () =>
      (async () => {
        try {
          const data = await animeAPI.searchAnime(q);
          const result = data.data.documents;
          //result.sort((a, b) => b.score - a.score);
          setAnimeList(result);
        } catch (error) {
          console.log('Failed to fetch anime list: ', error);
        }
        //setLoading(false);
      })(),
    [q]
  );

  return (
    <div>
      <AnimeSearchList data={animeList} />
    </div>
  );
}

export default AnimeSearchFutures;

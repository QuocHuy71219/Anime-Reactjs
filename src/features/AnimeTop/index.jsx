import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import animeAPI from 'api/animeAPI';
import AnimeTopList from './components/AnimeTopList';

AnimeTopFutures.propTypes = {};

function AnimeTopFutures(props) {
  const [animeList, setAnimeList] = useState([]);

  useEffect(
    () =>
      (async () => {
        try {
          const data = await animeAPI.getAnimelist(1);
          const result = data.data.documents;
          //result.sort((a, b) => b.score - a.score);
          setAnimeList(result);
        } catch (error) {
          console.log('Failed to fetch anime list: ', error);
        }
        //setLoading(false);
      })(),
    []
  );

  return (
    <div>
      <AnimeTopList data={animeList} />
    </div>
  );
}

export default AnimeTopFutures;

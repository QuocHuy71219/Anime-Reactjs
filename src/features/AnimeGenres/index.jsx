import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import animeAPI from 'api/animeAPI';
import AnimeGenresList from './components/AnimeGenresList';
import { useParams } from 'react-router-dom';

AnimeGenresFutures.propTypes = {};

function AnimeGenresFutures(props) {
  const [animeList, setAnimeList] = useState([]);
  const { genres } = useParams();

  useEffect(
    () =>
      (async () => {
        try {
          const data = await animeAPI.getListAnimeWithGenres(genres);
          const result = data.data.documents;
          console.log(result);
          //result.sort((a, b) => b.score - a.score);
          setAnimeList(result);
        } catch (error) {
          console.log('Failed to fetch anime list: ', error);
        }
        //setLoading(false);
      })(),
    [genres]
  );

  return (
    <div>
      <AnimeGenresList data={animeList} />
    </div>
  );
}

export default AnimeGenresFutures;

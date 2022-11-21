import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import animeAPI from 'api/animeAPI';
import TitleGenresList from './components/TitleGenresList';

TitleGenresFutures.propTypes = {};

function TitleGenresFutures(props) {
  //const classes = useStyles();
  const [genresList, setGenresList] = useState([]);

  useEffect(
    () =>
      (async () => {
        try {
          const data = await animeAPI.getGenres();
          const result = data.data;
          //result.sort((a, b) => b.score - a.score);
          setGenresList(result);
        } catch (error) {
          console.log('Failed to fetch genres list: ', error);
        }
        //setLoading(false);
      })(),
    []
  );

  return (
    <div>
      <TitleGenresList data={genresList} />
    </div>
  );
}

export default TitleGenresFutures;

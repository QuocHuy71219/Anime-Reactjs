import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

TitleGenres.propTypes = {
  genres: PropTypes.string,
  onclick: PropTypes.func,
};

function TitleGenres({ genres = '', onclick = null }) {
  const navigate = useNavigate();

  const handleChangeUrl = () => {
    navigate(`/genres-anime/${genres}`);
    onclick();
  };

  return <span onClick={handleChangeUrl}>{genres}</span>;
}

export default TitleGenres;

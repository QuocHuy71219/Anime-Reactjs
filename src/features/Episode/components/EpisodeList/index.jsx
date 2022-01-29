import React from 'react';
import PropTypes from 'prop-types';
import Episode from '../Episode';
import './styles.scss';

EpisodeList.propTypes = {
  data: PropTypes.array,
};

function EpisodeList({ data = null }) {
  return (
    <ul className="list-episode">
      {data.map((episode, idx) => (
        <li key={idx}>
          <Episode episode={episode} />
        </li>
      ))}
    </ul>
  );
}

export default EpisodeList;

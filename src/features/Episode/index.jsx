import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
import animeAPI from '../../api/animeAPI';
import EpisodeList from './components/EpisodeList';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

EpisodeFutures.propTypes = {
  animeId: PropTypes.string,
};

function EpisodeFutures({ animeId = '' }) {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const data = await animeAPI.getListAnimeEpisode(animeId, 0);
        const result = data.data;
        // const page = data.pagination.last_visible_page;
        // const result1 = [];
        // for (let i = 1; i <= page; i++) {
        //   const data1 = await animeAPI.getListAnimeEpisode(animeId, i);
        //   const result = data1.data;
        //   result1.push(...result);
        // }
        setEpisode(result);
        // const result = Array.isArray(data.data) ? data.data : data.data.documents;
      })();
    } catch (error) {
      console.log('Fetch api fail ', error);
    }
  }, [animeId]);

  return (
    <div>
      <Button style={{ marginLeft: '40px', color: '#d9d9d9', background: '#2e2e38' }}>FULL HD</Button>
      <div style={{ borderBottom: '1px solid grey', width: '100%' }}></div>
      <EpisodeList data={episode} />
    </div>
  );
}

export default EpisodeFutures;

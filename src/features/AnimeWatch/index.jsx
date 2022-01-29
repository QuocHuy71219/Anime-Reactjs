import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AnimeWatch from './components/AnimeWatch';

AnimeWatchFutures.propTypes = {};

function AnimeWatchFutures(props) {
  return (
    <div>
      <Routes>
        <Route path="/:episodeId" element={<AnimeWatch />} />
        {/* <Route path="/:animeId" element={<DetailPage />} /> */}
      </Routes>
    </div>
  );
}

export default AnimeWatchFutures;

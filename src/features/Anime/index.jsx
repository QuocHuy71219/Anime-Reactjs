//import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
//import DetailPage from './pages/DetailPage';

AnimeFutures.propTypes = {};

function AnimeFutures(props) {
  return (
    // <Box pt={4}>
    <div>
      <Routes>
        <Route path="/" element={<ListPage />} />
        {/* <Route path="/:animeId" element={<DetailPage />} /> */}
      </Routes>
    </div>

    // </Box>
  );
}

export default AnimeFutures;

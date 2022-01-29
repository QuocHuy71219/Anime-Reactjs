import Banner from 'components/Banner';
import AnimeFutures from 'features/Anime';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

Home.propTypes = {};

function Home(props) {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/" element={<AnimeFutures />} />
      </Routes>
    </>
  );
}

export default Home;

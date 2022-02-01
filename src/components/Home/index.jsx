import Banner from 'components/Banner';
import AnimeFutures from 'features/Anime';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.scss';

Home.propTypes = {};

function Home(props) {
  return (
    <div className="home">
      <Banner />
      <Routes>
        <Route path="/" element={<AnimeFutures />} />
      </Routes>
    </div>
  );
}

export default Home;

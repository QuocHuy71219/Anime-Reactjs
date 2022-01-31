//import Home from 'components/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'components/NotFound';
import Footer from 'components/Footer';
import Header from 'components/Header';
import NavBar from 'components/NavBar';
//import AnimeFutures from 'features/Anime';
import DetailPage from 'features/Anime/pages/DetailPage';
import Home from 'components/Home';
import AnimeWatch from 'features/AnimeWatch/components/AnimeWatch';
import AnimeWatchFutures from 'features/AnimeWatch';
import AnimeTopFutures from 'features/AnimeTop';
import AnimeGenresFutures from 'features/AnimeGenres';
import AnimeSearchFutures from 'features/AnimeSearch';
//import Comment from 'features/Comment/components/Comment';
//import WatchFutures from 'features/Watch';
//import EpisodeFutures from 'features/Episode';
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#1f1f26' }}>
      <Header />
      <NavBar />
      <Routes>
        {/* <Redirect from="/home" to="/" exact></Redirect>  */}
        {/* <Redirect from="/post-list/:postId" to="/posts/:postId" exact></Redirect> */}

        <Route path="/" element={<Home />} />
        <Route path="anime" element={<DetailPage />}>
          <Route path=":animeId" element={<DetailPage />} />
        </Route>

        <Route path="top-anime" element={<AnimeTopFutures />} />

        <Route path="genres-anime" element={<AnimeGenresFutures />}>
          <Route path=":genres" element={<AnimeGenresFutures />} />
        </Route>

        <Route path="search" element={<AnimeSearchFutures />} />

        <Route path="episode" element={<AnimeWatchFutures />}>
          <Route path=":episodeId" element={<AnimeWatch />} />
        </Route>

        {/* <Route path="/" element={<NavBar />} /> */}
        {/* <Route path="/albums" element={} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

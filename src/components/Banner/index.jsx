import { PlayCircleOutline } from '@material-ui/icons';
import animeAPI from 'api/animeAPI';
import SwiperBanner from 'components/SwiperBanner';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import './styles.scss';

Banner.propTypes = {};

function Banner(props) {
  const navigate = useNavigate();
  const [animeList, setAnimeList] = useState([]);
  useEffect(
    () =>
      (async () => {
        try {
          const data = await animeAPI.getAnimeUpcoming();
          //const data = await animeAPI.getAnimelist();
          //const result = data.data.documents;
          const result = data.data;
          setAnimeList(result);
        } catch (error) {
          console.log('Failed to fetch anime list: ', error);
        }
        //setLoading(false);
      })(),
    []
  );
  const handleChangeUrl = (id) => {
    //const [anime] = [...animeList];
    navigate(`/anime/${id}`);
  };

  return (
    <ul className="list-banner">
      <SwiperBanner>
        {animeList.map((anime, idx) => (
          <SwiperSlide key={idx}>
            <li key={idx}>
              {/* <Anime anime={anime} /> */}
              <div className="banner" onClick={() => handleChangeUrl(anime.mal_id)}>
                <div className="banner__img">
                  {/* <img src={anime.cover_image} alt={anime.titles.en} /> */}
                  <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                  {/* <span>Tập {anime.episodes_count}</span> */}
                  <span>Tập {anime.episodes}</span>
                  <div className="banner__img--icon">
                    <PlayCircleOutline style={{ fontSize: '100px' }} />
                  </div>
                </div>
                <div className="banner__title">{anime.title}</div>
              </div>
            </li>
          </SwiperSlide>
        ))}
      </SwiperBanner>
    </ul>
  );
}

export default Banner;

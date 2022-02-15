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
          const data = await animeAPI.getAnimelist(12);
          const result = data.data.documents;
          setAnimeList(result);
        } catch (error) {
          console.log('Failed to fetch anime list: ', error);
        }
        //setLoading(false);
      })(),
    []
  );

  const handleChangeUrl = () => {
    const [anime] = [...animeList];
    navigate(`/anime/${anime.id}`);
  };

  return (
    <ul className="list-banner">
      <SwiperBanner>
        {animeList.map((anime, idx) => (
          <SwiperSlide key={idx}>
            <li key={idx}>
              {/* <Anime anime={anime} /> */}
              <div className="banner" onClick={handleChangeUrl}>
                <div className="banner__img">
                  <img src={anime.cover_image} alt={anime.titles.en} />
                  <span>Tập {anime.episodes_count}</span>
                  <div className="banner__img--icon">
                    <PlayCircleOutline style={{ fontSize: '100px' }} />
                  </div>
                </div>
                <div className="banner__title">{anime.titles.en}</div>
              </div>
            </li>
          </SwiperSlide>
        ))}
      </SwiperBanner>
    </ul>
  );
}

export default Banner;

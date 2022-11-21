import animeAPI from 'api/animeAPI';
import Comment from 'features/Comment/components/Comment';
import CommentShow from 'features/Comment/components/CommentShow';
import EpisodeFutures from 'features/Episode';
//import EpisodeFutures from 'features/Episode';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
//import imgBanner from '../../../asset/img/banner.jpg';
import imgBanner from 'asset/img/banner.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from 'features/Comment/commentSlice';
import './styles.scss';

DetailPage.propTypes = {};

function DetailPage(props) {
  const [anime, setAnime] = useState();
  const { animeId } = useParams();
  const loggedInUser = useSelector((state) => state.user.current);
  const listComment = useSelector((state) => state.comment.commentList);

  const nameUser = loggedInUser.fullName;
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await animeAPI.getAnimeWidthId(animeId);
      const result = data.data;
      setAnime(result);
    })();
  }, [animeId]);

  const handleSubmit = (values) => {
    const comment = values.comment;
    const action = addComment(comment);
    dispatch(action);
  };

  return (
    <div style={{ color: 'white' }}>
      <div style={{ width: '100%', height: '200px' }} className="anime-detail__banner">
        <img
          src={anime?.trailer.images.maximum_image_url ? anime?.trailer.images.maximum_image_url : imgBanner}
          alt="404"
          style={{ width: '100%', height: '300px', opacity: '0.5' }}
        />
      </div>

      <div style={{ display: 'flex', flexFlow: 'column nowrap' }} className="anime-detail">
        <div style={{ margin: '100px 0 30px 100px' }}>
          <img
            src={anime?.images.jpg.large_image_url}
            alt={anime?.title}
            style={{ borderRadius: '10px', height: '370px', width: '250px' }}
          />
          <div style={{ fontSize: '20px' }}>{anime?.title}</div>
        </div>
        <div style={{ margin: '100px 100px 0 50px ' }} className="anime-description">
          <div style={{ fontSize: '50px', fontWeight: 'bold' }} className="anime-description__title">
            {anime?.title}
          </div>
          <div
            style={{ fontSize: '20px' }}
            className="anime-description__content"
            dangerouslySetInnerHTML={{ __html: anime?.synopsis }}
          ></div>
        </div>
      </div>
      <Routes>
        <Route path="/:animeId" element={<EpisodeFutures animeId={animeId} />} />
      </Routes>
      {/* <EpisodeFutures animeId={animeId} /> */}
      <Comment onSubmit={handleSubmit} />
      <CommentShow name={nameUser} comment={listComment} />
    </div>
  );
}

export default DetailPage;

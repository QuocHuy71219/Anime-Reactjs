import animeAPI from 'api/animeAPI';
import Comment from 'features/Comment/components/Comment';
import CommentShow from 'features/Comment/components/CommentShow';
import EpisodeFutures from 'features/Episode';
//import EpisodeFutures from 'features/Episode';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
//import imgBanner from '../../../asset/img/banner.jpg';
import imgBanner from '../../../asset/img/banner.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from 'features/Comment/commentSlice';

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
      <div style={{ width: '100%', height: '200px' }}>
        <img
          src={anime?.banner_image ? anime?.banner_image : imgBanner}
          alt="404"
          style={{ width: '100%', height: '300px', opacity: '0.5' }}
        />
      </div>

      <div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
        <div style={{ margin: '100px 0 30px 100px' }}>
          <img
            src={anime?.cover_image}
            alt={anime?.titles.en}
            style={{ borderRadius: '10px', height: '370px', width: '250px' }}
          />
          <div style={{ fontSize: '20px' }}>{anime?.titles.en}</div>
        </div>
        <div style={{ margin: '100px 100px 0 50px ' }}>
          <div style={{ fontSize: '50px', fontWeight: 'bold' }}>{anime?.titles.en}</div>
          <div style={{ fontSize: '20px' }} dangerouslySetInnerHTML={{ __html: anime?.descriptions.en }}></div>
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

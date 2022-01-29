import React from 'react';
//import Comment from '../Comment';
import PropTypes from 'prop-types';
//import { useSelector } from 'react-redux';

CommentShow.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.array,
};

function CommentShow({ name = '', comment = [] }) {
  // const loggedInUser = useSelector((state) => state.user.current);
  // const nameUser = loggedInUser.fullName;

  return (
    <div>
      <h3>DANH SÁCH CÁC BÌNH LUẬN</h3>
      <div style={{ background: '#2E2E2E', listStyleType: 'none', padding: '10px 0 10px 10px' }}>
        {comment.map((cmt, idx) => (
          <li key={idx}>
            <span style={{ color: 'rgba(0, 191, 255, 1)' }}>{name}</span>
            <br />
            {cmt}
          </li>
        ))}
      </div>
    </div>
  );
}

export default CommentShow;

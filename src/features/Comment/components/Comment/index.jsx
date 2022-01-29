import PropTypes from 'prop-types';
import React from 'react';
import CommentForm from '../CommentForm';
//import { useSelector } from 'react-redux';
//import CommentShow from '../CommentShow';

Comment.propTypes = {
  onSubmit: PropTypes.func,
};

function Comment(props) {
  // const [comment, setComment] = useState('');
  // const loggedInUser = useSelector((state) => state.user.current);
  // const nameUser = loggedInUser.fullName;

  const handleSubmit = (values) => {
    console.log('Form Submit:', values);

    //name = nameUser;
    // setComment(values.comment);
    // return <CommentShow name={nameUser} comment={comment} />;
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <div>
      <CommentForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Comment;

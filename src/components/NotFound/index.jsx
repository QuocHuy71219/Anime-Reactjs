import React from 'react';
import imgerror from '../../asset/img/error404en.png';

NotFound.propTypes = {};

function NotFound(props) {
  return <img src={imgerror} alt="404" style={{ width: '100%', height: 'auto' }} />;
}

export default NotFound;

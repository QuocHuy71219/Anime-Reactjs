import { Button } from '@mui/material';
import TitleGenresFutures from 'features/TitleGenres';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

NavBar.propTypes = {};

function NavBar(props) {
  return (
    <div className="nav">
      <NavLink className="nav__link" to="/">
        <Button color="inherit">Trang Chủ</Button>
      </NavLink>

      {/* <NavLink className="nav__link" to="/genres-anime">
        <Button color="inherit">Thể Loại</Button>
      </NavLink> */}
      <div className="nav__link">
        <TitleGenresFutures />
      </div>

      <NavLink className="nav__link" to="/top-anime">
        <Button color="inherit">Top Anime</Button>
      </NavLink>
    </div>
  );
}

export default NavBar;

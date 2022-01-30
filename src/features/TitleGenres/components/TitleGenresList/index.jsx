import React from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles, Popover } from '@material-ui/core';
import './styles.scss';
import TitleGenres from '../TitleGenres';

const useStyles = makeStyles((theme) => ({
  btn: {
    color: '#fff',
    '&:hover': {
      color: 'red',
    },
  },
}));

TitleGenresList.propTypes = {
  data: PropTypes.array,
};

function TitleGenresList({ data = [] }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="text" onClick={handleClick} className={classes.btn}>
        Thể Loại
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <ul className="list-genres">
          {data.map((genres, idx) => (
            <li key={idx}>
              <TitleGenres onclick={handleClose} genres={genres} />
            </li>
          ))}
        </ul>
      </Popover>
    </div>
  );
}

export default TitleGenresList;

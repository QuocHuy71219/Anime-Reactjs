import { AppBar, Box, IconButton, InputBase, Menu, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close, Search } from '@material-ui/icons';
import { Avatar } from '@mui/material';
import logo from 'asset/img/logo1.png';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSlice';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  appbar: {
    backgroundColor: '#000',
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    //color: '#4EB1BA',
    color: '#00ffff',
    textDecoration: 'none',
  },
  login: {
    color: '#00ffff',
    '&:hover': {
      color: '#2196f3',
    },
  },

  loginmobi: {
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden',
      padding: 0,
      margin: 0,
    },
  },

  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    border: '1px solid #ffea00',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: '1',
  },

  inputRoot: {
    color: theme.palette.background.paper,
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);

  const isLoggedIn = !!loggedInUser.id;
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
    setAnchorEl(null);
  };

  const handleGetValue = (e) => {
    setValue(e.target.value);
  };

  const handleChangeUrl = (e) => {
    if (!value) return;
    navigate(`/search?q=${value}`);
    setValue('');
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      handleChangeUrl();
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          {/* <CodeIcon className={classes.menuButton} /> */}
          <Avatar alt="logo" src={logo} className={classes.menuButton} />

          <Typography variant="h4" className={classes.title}>
            <Link className={classes.link} to="/">
              ONICHANIME
            </Link>
          </Typography>

          {/* <div className={classes.loginmobi}> */}
          <div className={classes.search}>
            <div className={classes.searchIcon} onClick={handleChangeUrl}>
              <Search color="secondary" />
            </div>
            <InputBase
              id="name"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handleGetValue}
              value={value}
              inputProps={{ 'aria-label': 'search' }}
              onKeyDown={keyPress}
            />
          </div>
          {/* </div> */}

          <div className={classes.loginmobi}>
            {!isLoggedIn && (
              <Button color="secondary" onClick={handleClickOpen}>
                <h3 className={classes.login}>Login</h3>
              </Button>
            )}

            {isLoggedIn && (
              <IconButton color="secondary" onClick={handleUserClick}>
                <AccountCircle />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>

      <Dialog disableEscapeKeyDown open={open} aria-labelledby="form-dialog-title">
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          <DialogContentText>
            {mode === MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose} />

                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                    Already have an account. Login here
                  </Button>
                </Box>
              </>
            )}

            {mode === MODE.LOGIN && (
              <>
                <Login closeDialog={handleClose} />

                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                    Don't have an account. Register here
                  </Button>
                </Box>
              </>
            )}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

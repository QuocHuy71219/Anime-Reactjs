import { Box, Button, makeStyles } from '@material-ui/core';
import { Facebook, GitHub, YouTube } from '@material-ui/icons';
import React from 'react';
import './styles.scss';

Footer.propTypes = {};

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.background.paper,
  },

  title: {
    color: 'white',
  },
}));
function Footer(props) {
  const classes = useStyles();
  return (
    <div className="footer">
      <div className="footer-left">
        <h3 className={classes.title}>GIỚI THIỆU</h3>
        <span className={classes.title}>ONICHANIME - Trang web xem Anime HD trực tuyến.</span>
        <p className={classes.title}>Copyright © 2022 . ONICHANIME. All Rights Reserved.</p>
      </div>

      <div className="footer-right">
        <Box className={classes.box}>
          <Button className={classes.button} href="https://github.com/QuocHuy71219">
            <GitHub />
          </Button>
        </Box>
        <Box className={classes.box}>
          <Button className={classes.button} href="https://www.facebook.com/profile.php?id=100005511615799">
            <Facebook />
          </Button>
        </Box>
        <Box className={classes.box}>
          <Button className={classes.button} href="https://www.youtube.com/channel/UC_UYJu8xLpAMdX0urfNjZgw">
            <YouTube />
          </Button>
        </Box>
        <span>© Vietsub bởi Onichanime Subteam</span>
      </div>
    </div>
  );
}

export default Footer;

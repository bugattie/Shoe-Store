import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';
  

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appColor: {
    background: '#00686B'
  },
  links: {
      float: 'left',
      color: '#FFF',
      marginRight: '10px',
  }
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appColor}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shoe Store
          </Typography>
          <Typography className={classes.root}>
            <Link to="/" className={classes.links}>
                Home
            </Link>
            <Link to="products" className={classes.links}>
                Our Products
            </Link>
            <Link to="about" className={classes.links}>
                About Us
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

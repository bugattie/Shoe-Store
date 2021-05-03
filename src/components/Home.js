import React from 'react'
import '../App.css';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} className="items">
            <h1>Welcome to shoe store</h1>
            <h2>Great to see you on board!</h2>
            <Button variant="contained" href="/products" className="bg">
                See our Products
            </Button>
        </div>
    )
}

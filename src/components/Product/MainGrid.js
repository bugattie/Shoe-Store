import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const useStylesCard = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    links: {
        textDecoration: "none",
    }
  });
  

export default function MainGrid() {
  const classes = useStyles();
  const cardClasses = useStylesCard();


  const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          {
              Object.entries(shoes).map(([id, {name, img}]) => {
                return <Link to={`/products/${id}`} className={cardClasses.links}>
                    <Grid item sm key={id}>
                    <Card className={cardClasses.root} key={id}>
                    <CardActionArea>
                    <CardMedia
                        className={cardClasses.media}
                        image={img}
                        title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                </Link>
              })
          }
      </Grid>

      <Grid container spacing={3}>
      {
              Object.entries(shoes).map(([id, {name, img}]) => {
                return <Link to={`/products/${id}`} className={cardClasses.links}>
                    <Grid item sm key={id}>
                    <Card className={cardClasses.root} key={id}>
                    <CardActionArea>
                    <CardMedia
                        className={cardClasses.media}
                        image={img}
                        title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                </Link>
              })
          }
      </Grid>
    </div>
  );
}

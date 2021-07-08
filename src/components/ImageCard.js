import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    background: 'rgba(0,0,0,0.5)',
    margin: '10px',
    borderRadius: '10px',
    width: '100%',
    objectFit: 'cover',
    '&:hover':{
      boxShadow: '-5px -3px 0px 0px rgba(132,90,191,1)',
      transform: 'scale(1.02)' 
    },
},
  media: {
    height: 200,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold', 
    fontSize: '1rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Roboto',
    fontSize: '1.1rem',
    color: '#ddd',
  },
 
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}>
    <CardActionArea
      onClick={(e) => window.open(place.url)}
    >
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
           title={place.title}
        
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}

          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
         {/* <button>
            <a href={place.url} target='_blank' rel="noopener noreferrer"> Saiba mais </a>
            </button>  */}
          <div>
          </div>
           </Typography>
        </CardContent>
      </Card>
      </CardActionArea>
    </Collapse>
  );
}


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Girlsplace from './components/Girlsplace';
import Footer from './components/Footer';


const useStyles = makeStyles((theme) => ({
  root: {
    diplay: 'table-cell',
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/banner.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Girlsplace />
      <Footer />  
    </div>
  );
}



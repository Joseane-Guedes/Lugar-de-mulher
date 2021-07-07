import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, IconButton, Toolbar, Collapse, Button } from "@material-ui/core";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Roboto",

  },
  appbar: {
  background: "none",
  backgroundColor:'#C7D2FE66',
  backgroundSize:"10px",
  color: "#845abf",
 /*  backdropFilter: "blur(1px)", */
    
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },

  colorText: {
    color: "#845abf",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "3.0rem",
  },
  goDown: {
    color: "#FFF",
    fontSize: "3rem",
  },


  
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbar}>
          <Button color="inherit" onClick={() => window.open('https://www.youtube.com/watch?v=fPgkhbs3AnE')}>Projeto Lugar de Mulher</Button>
          <Button color="inherit" onClick={() => window.open('https://github.com/Joseane-Guedes')}>Autora</Button>
          <Button color="inherit" onClick={() => window.open('https://www.linkedin.com/in/joseane-guedes/')}>Contato</Button>
          <Button color="inherit" onClick={() => window.open('https://reprograma.com.br/')}>Reprograma</Button>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Lugar de Mulher <br />
            <img
              src="https://readme-typing-svg.herokuapp.com?color=845abf&size=37&vCenter=true&lines=%C3%A9+onde+ela+quiser_"
              alt="Foto de mulheres em tecnologia"
            />
          </h1>
          
          <Scroll to="girlsplace" smooth={true}>
            <IconButton>
              <ArrowDropDownCircleIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

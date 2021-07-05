import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
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
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#E12DFF",
    fontSize: "3rem",
  },
  colorText: {
    color: "#E12DFF",
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

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5rem",
    marginRight: "5rem",
    padding: "0",
    paddingTop: "1.5rem",
    color: "#4a575d",
    fontSize: "1rem",
    listStyleType: "none",
   
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
   <nav>
    <ul className={classes.nav}>
    <li><a href="https://www.youtube.com/watch?v=fPgkhbs3AnE" target='_blank' rel="noopener noreferrer"> <span className={classes.colorText}>Projeto Lugar de mulher.</span></a></li>
    <li><a href="https://github.com/Joseane-Guedes" target='_blank' rel="noopener noreferrer"><span className={classes.colorText}>Autora</span></a></li>
    <li><a href="mailto:joseane_23@hotmail.com" target='_blank' rel="noopener noreferrer"><span className={classes.colorText}>Contato</span></a></li>  
    <li><a href="https://reprograma.com.br/" target='_blank' rel="noopener noreferrer"><span className={classes.colorText}>Reprograma</span></a></li> 
</ul>
</nav>


        <Toolbar className={classes.appbarWrapper}>
         

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
              src="https://readme-typing-svg.herokuapp.com?color=E12DFF&size=37&vCenter=true&lines=%C3%A9+onde+ela+quiser_"
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

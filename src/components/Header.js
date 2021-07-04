import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
/* import SortIcon from "@material-ui/icons/Sort"; */
/* import ArrowDropDownCircleIcon from '@material-ui/icons/ExpandMore'; */
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
    marginLeft: "4rem",
    marginRight: "4rem",
    padding: "0",
    paddingTop: "20px",
    color: "#4a575d",
    fontSize: "1rem",
    listStyleType: "none",
    fontFamily: 'Gill Sans',
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
    {/*   <h1 className={classes.appbarTitle}>
            Projeto <span className={classes.colorText}>Lugar de mulher.</span>
          </h1> */}
      <nav>
    <ul className={classes.nav}>
    <li><a href="https://www.youtube.com/watch?v=fPgkhbs3AnE">Lugar de Mulher</a></li>
    <li><a href="https://github.com/Joseane-Guedes">Autora</a></li>
    <li><a href="https://reprograma.com.br/">Reprograma</a></li>  
</ul>
</nav>


        <Toolbar className={classes.appbarWrapper}>
         
   

    {/* inserir sua navbar aqui */}
        {/*   <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton> */}
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Lugar de Mulher <br />
            <img
              src="https://readme-typing-svg.herokuapp.com?color=E12DFF&size=37&vCenter=true&lines=%C3%A9+onde+ela+quiser_"
              alt="Foto de mulheres em tecnologia"
            />
            {/*  My<span className={classes.colorText}>Island.</span> */}
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

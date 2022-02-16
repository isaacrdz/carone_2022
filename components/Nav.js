import React, { useEffect,useState } from "react";
import {
  Box,
  Container,
  Button,
  Grid,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Link from "next/link";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";
import { makeStyles } from "@material-ui/core/styles";
import NavList from "./NavList";
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  categories: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    marginBottom: 30,
  },
  mainLogo: {
    width: "20VW",
    maxWidth: "180px",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navListDesktop: {
    display:'flex',
    [theme.breakpoints.down("xs")]: {
      background: 'white',
      position: 'absolute',
      left: 0,
      right: 0,
      top: '3rem',
      overflow: 'hidden',
      zIndex: 8,
    },
  },
  navListMobile: {
      display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
  menuClosed:{
    [theme.breakpoints.down("xs")]: {
      height:0,
    },
  }
}));

const Nav = () => {
  const classes = useStyles();
  const { user, loadUser, logout } = useAuth();
  const [menuOpen,setMenuOpen] = useState(false);
  useEffect(() => {
    if (!user || JSON.stringify(user) === "{}") {
      loadUser();
    }
  }, []);


  

  const router = useRouter();
  const HomeNav = () => (
    <Container maxWidth="lg">
      <Box className={classes.navContainer} p={1} bgcolor="background.paper">
        <Box p={1}>
          <Link href="/" as={`/`} passHref={true}>
            <a>
              <img className={classes.mainLogo} src="/static/logo.png" />
            </a>
          </Link>
        </Box>
        <Box className={classes.navListMobile}>
          {menuOpen?
          <MenuOpenIcon onClick={()=>{setMenuOpen(!menuOpen)}} />
          :
          <MenuIcon onClick={()=>{setMenuOpen(!menuOpen)}} />}
        </Box>

        <Box 
        className={clsx({
          [classes.navListDesktop]:true,
          [classes.menuClosed]: !menuOpen
        })}
        >
          <NavList setMenuOpen={setMenuOpen} logout={logout} user={user} />
        </Box>
        

      </Box>
    </Container>
  );

  // const PageNav = () => (
  //   <Container maxWidth="lg">
  //     <Grid container spacing={3} style={{ marginTop: 10, marginBottom: 10 }}>
  //       <Grid item xs={2}>
  //         <Link href="/" as={`/`} passHref={true}>
  //           <a>
  //             <Image
  //               src="https://carone.com.mx/wp-content/uploads/logo.png"
  //               style={{ width: 180 }}
  //               alt="aasd"
  //             />
  //           </a>
  //         </Link>
  //       </Grid>

  //       <Grid item xs={10}>
  //         <Box display="flex" alignItems="center">
  //           <Box p={1} mt={1}>
  //             <Link href="/autos" passHref={true}>
  //               <Button color="primary">Autos</Button>
  //             </Link>
  //           </Box>
  //           <Box p={1} mt={1}>
  //             <Link href="/autos" passHref={true}>
  //               <Button color="primary">Favoritos</Button>
  //             </Link>
  //           </Box>
  //         </Box>
  //       </Grid>
  //     </Grid>
  //   </Container>
  // );

  return HomeNav();
};

export default Nav;

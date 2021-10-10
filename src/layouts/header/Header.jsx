import React from "react";

import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Tabs, Tab } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import ElevationScroll from "../../library/elevation-scroll/ElevationScroll";

import logo from "../../assets/logo.svg";

// creating inline style
const useStyles = makeStyles(
  // accessing our default theme
  theme => ({
    // className for styles
    toolbarMargin: {
      // to apply the default theme style - toolbar margin
      ...theme.mixins.toolbar,
      marginBottom: "3rem",
    },
    logo: {
      height: "7em",
    },
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
    },
  })
);

function Header() {
  // style classes
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        {/* <AppBar color='primary' /> - default 'color' prop is set to 'primary' */}
        <AppBar>
          {/* Toolbar helps layout elements horizontally manner for the AppBar */}
          {/* disableGutters - to remove default padding */}
          <Toolbar disableGutters>
            <img src={logo} alt='company logo' className={classes.logo} />

            {/* <Typography variant='h4' color='secondary'>
              Savage Dev
            </Typography> */}
            <Tabs className={classes.tabContainer}>
              <Tab className={classes.tab} label='Home' />
              <Tab className={classes.tab} label='Services' />
              <Tab className={classes.tab} label='The Revolution' />
              <Tab className={classes.tab} label='About Us' />
              <Tab className={classes.tab} label='Contact Us' />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      {/* applying default mui theme toolbar margin */}
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;

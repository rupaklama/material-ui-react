import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Tabs, Tab } from "@material-ui/core";
import { Button } from "@material-ui/core";

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
      height: "8em",
    },
    logoContainer: {
      padding: 0,
      // to disable opacity overlay on hover
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      height: "45px",
    },
  })
);

function Header() {
  // style classes
  const classes = useStyles();
  const [value, setValue] = useState(0);

  useEffect(() => {
    // setting 'Active' on tabs to persist
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    }
  }, [value]);

  // newValue - index of current selected tab
  const handleChange = (e, newValue) => setValue(newValue);

  return (
    <>
      <ElevationScroll>
        {/* <AppBar color='primary' /> - default 'color' prop is set to 'primary' */}
        <AppBar>
          {/* Toolbar helps layout elements horizontally manner for the AppBar */}
          {/* disableGutters - to remove default padding */}
          <Toolbar disableGutters>
            <Button
              // disable transition click effect
              disableRipple
              component={Link}
              to='/'
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img src={logo} alt='company logo' className={classes.logo} />
            </Button>

            {/* <Typography variant='h4' color='secondary'>
              Savage Dev
            </Typography> */}
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor='primary'
              className={classes.tabContainer}
            >
              {/* Hooking up 'Link' component of react router with 'to' prop for navigation */}
              <Tab className={classes.tab} component={Link} to='/' label='Home' />
              <Tab className={classes.tab} component={Link} to='/services' label='Services' />
              <Tab className={classes.tab} component={Link} to='/revolution' label='The Revolution' />
              <Tab className={classes.tab} component={Link} to='/about' label='About Us' />
              <Tab className={classes.tab} component={Link} to='/contact' label='Contact Us' />
            </Tabs>

            <Button variant='contained' color='secondary' className={classes.button}>
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      {/* applying default mui theme toolbar margin */}
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;

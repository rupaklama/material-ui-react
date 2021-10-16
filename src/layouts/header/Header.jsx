import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Tabs, Tab, Button, Menu, MenuItem } from '@material-ui/core';

import ElevationScroll from '../../library/elevation-scroll/ElevationScroll';

import logo from '../../assets/logo.svg';
import useStyles from './Header.style';

function Header() {
  // style classes
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // setting 'Active' on tabs to persist
    // correct path & value is not set yet
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    }
  }, [value]);

  // newValue - index of current selected tab
  const handleChange = (e, newValue) => setValue(newValue);

  // telling menu where we want to be open on click
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    // to pass the index of MenuItem which just got clicked
    setSelectedIndex(i);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  // instead of putting it individually in MenuItem to avoid code duplication
  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/software' },
    { name: 'Mobile App Development', link: '/apps' },
    { name: 'Website Development', link: '/sites' },
  ];

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
              // to direct to homepage
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

              <Tab
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={anchorEl ? true : undefined}
                onMouseOver={handleClick}
                className={classes.tab}
                component={Link}
                to='/services'
                label='Services'
              />

              <Tab className={classes.tab} component={Link} to='/revolution' label='The Revolution' />
              <Tab className={classes.tab} component={Link} to='/about' label='About Us' />
              <Tab className={classes.tab} component={Link} to='/contact' label='Contact Us' />
            </Tabs>

            <Button variant='contained' color='secondary' className={classes.button}>
              Free Estimate
            </Button>

            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              // overriding or extending style
              classes={{ paper: classes.menu }}
              // remove on un-hover
              MenuListProps={{ onMouseLeave: handleClose }}
              // not to float above header & removing drop shadow
              elevation={0}
            >
              {/* <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/services'
                // root is referring to theme in makeStyles
                classes={{ root: classes.menuItem }}
              >
                Services
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/software'
                classes={{ root: classes.menuItem }}
              >
                Custom Software Development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/apps'
                classes={{ root: classes.menuItem }}
              >
                Mobile App Development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/sites'
                classes={{ root: classes.menuItem }}
              >
                Website Development
              </MenuItem> */}

              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option.link}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={e => {
                    handleMenuItemClick(e, i);
                    setValue(1);
                    handleClose();
                  }}
                  selected={i === selectedIndex && value === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      {/* applying default mui theme toolbar margin */}
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;

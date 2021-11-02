import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/styles';

import ElevationScroll from '../../library/elevation-scroll/ElevationScroll';

import logo from '../../assets/logo.svg';
import useStyles from './Header.style';

function Header({ value, setValue, selectedIndex, setSelectedIndex }) {
  // style classes
  const classes = useStyles();
  const theme = useTheme();
  // md - same as max-width, medium & below to return 'true'
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  // check to see if user is on ios device
  // userAgent returns a string representing values such as the name, version, and platform of the browser
  // The test() method tests for a match in a string.
  // This method returns true if it finds a match, otherwise it returns false.
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  // NOTE - got move to App Component to share with others
  // const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // setting 'Active' on tabs to persist
    // correct path & value is not set yet
    // if (window.location.pathname === '/' && value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === '/services' && value !== 1) {
    //   setValue(1);
    // } else if (window.location.pathname === '/revolution' && value !== 2) {
    //   setValue(2);
    // } else if (window.location.pathname === '/about' && value !== 3) {
    //   setValue(3);
    // } else if (window.location.pathname === '/contact' && value !== 4) {
    //   setValue(4);
    // }

    switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0);
        }
        break;
      case '/services':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case '/software':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case '/apps':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case '/sites':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case '/revolution':
        if (value !== 2) {
          setValue(2);
        }
        break;
      case '/about':
        if (value !== 3) {
          setValue(3);
        }
        break;
      case '/contact':
        if (value !== 4) {
          setValue(4);
        }
        break;
      case '/estimate':
        if (value !== 5) {
          setValue(5);
        }
        break;
      default:
        break;
    }
  }, [setSelectedIndex, setValue, value]);

  // newValue - index of current selected tab
  const handleChange = (e, newValue) => setValue(newValue);

  // telling menu where we want to be open on click
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    // to pass the index of MenuItem which just got clicked
    setSelectedIndex(i);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  // instead of putting it individually in MenuItem to avoid code duplication
  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/software' },
    { name: 'Mobile App Development', link: '/apps' },
    { name: 'Website Development', link: '/sites' },
  ];

  const tabs = (
    <Fragment>
      {/* <Typography variant='h4' color='secondary'>
              Savage Dev
            </Typography> */}
      <Tabs value={value} onChange={handleChange} indicatorColor='primary' className={classes.tabContainer}>
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
        open={openMenu}
        onClose={handleClose}
        // overriding or extending style
        classes={{ paper: classes.menu }}
        // remove on un-hover
        MenuListProps={{ onMouseLeave: handleClose }}
        // not to float above header & removing drop shadow
        elevation={0}
        // above app bar
        style={{ zIndex: 1302 }}
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
    </Fragment>
  );

  const drawer = (
    <Fragment>
      {/* props to optimize mobile performance */}
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        {/* adding div to add margin to push drawer down */}
        <div className={classes.toolbarMargin} />

        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to='/'
            selected={value === 0}
            // apply this on selected item
            classes={{ selected: classes.drawerItemSelected }}
          >
            {/* to get rid off default link style */}
            <ListItemText
              // className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
              className={classes.drawerItem}
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to='/services'
            selected={value === 1}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Services
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to='/revolution'
            selected={value === 2}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              The Revolution
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to='/about'
            selected={value === 3}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              About Us
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to='/contact'
            selected={value === 4}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact Us
            </ListItemText>
          </ListItem>

          <ListItem
            className={classes.drawerItemEstimate}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to='/estimate'
            selected={value === 5}
            classes={{ selected: classes.drawerItemSelected }}
          >
            {/* applying multiple styles in an array */}
            {/* <ListItemText className={[classes.drawerItem, classes.drawerItemEstimate]} disableTypography> */}
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );
  return (
    <>
      <ElevationScroll>
        {/* <AppBar color='primary' /> - default 'color' prop is set to 'primary' */}
        <AppBar className={classes.appBar}>
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

            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      {/* applying default mui theme toolbar margin to push other page down to be visible */}
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;

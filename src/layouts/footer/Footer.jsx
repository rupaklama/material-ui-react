import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Hidden } from '@material-ui/core';

import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

import useStyles from './Footer.style';

const Footer = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column'>
              <Grid item component={Link} to='/' onClick={() => setValue(0)} className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/services'
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to='/software'
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to='/apps'
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                className={classes.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                to='/sites'
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/revolution'
                onClick={() => setValue(2)}
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                onClick={() => setValue(2)}
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                onClick={() => setValue(2)}
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                onClick={() => setValue(2)}
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to='/about' onClick={() => setValue(3)} className={classes.link}>
                About Us
              </Grid>
              <Grid item component={Link} to='/about' onClick={() => setValue(3)} className={classes.link}>
                History
              </Grid>
              <Grid item component={Link} to='/about' onClick={() => setValue(3)} className={classes.link}>
                Team
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to='/contact' onClick={() => setValue(4)} className={classes.link}>
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img src={footerAdornment} alt='black decorative slash' className={classes.adornment} />

      <Grid container justify='flex-end' spacing={2} className={classes.socialContainer}>
        <Grid item component={'a'} href='https://www.facebook.com' rel='noopener noreferrer' target='_blank'>
          <img src={facebook} alt='facebook logo' className={classes.icon} />
        </Grid>
        <Grid item component={'a'} href='https://www.twitter.com' rel='noopener noreferrer' target='_blank'>
          <img src={twitter} alt='twitter logo' className={classes.icon} />
        </Grid>
        <Grid item component={'a'} href='https://www.instagram.com' rel='noopener noreferrer' target='_blank'>
          <img src={instagram} alt='instagram logo' className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

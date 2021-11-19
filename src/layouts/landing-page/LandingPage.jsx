import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Lottie from 'react-lottie';
import animationData from '../../animations/landinganimation/data';
import ButtonArrow from '../../components/button/ButtonArrow';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '50em',
    minWidth: '20em',
    marginTop: '2em',
    marginLeft: '10%',
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.savageOrange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    borderColor: theme.palette.common.savageBlue,
    color: theme.palette.common.savageBlue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    height: 45,
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Grid item>
        <Grid container direction='row' justify='flex-end' alignItems='center'>
          <Grid sm item>
            <Typography variant='h2' align='center'>
              By Savage Developers
            </Typography>

            <Grid container justify='center' className={classes.buttonContainer}>
              <Grid item>
                <Button className={classes.estimateButton} variant='contained'>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' className={classes.learnButtonHero}>
                  Learn more
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.savageBlue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width='100%' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;

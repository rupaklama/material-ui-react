import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
}));

const LandingPage = () => {
  const classes = useStyles();

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
            <Grid container>
              <Grid item>
                <Button variant='contained'>Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant='outlined'>
                  Learn more
                  <ButtonArrow width={15} height={15} fill='red' />
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

import { Button, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import Lottie from "react-lottie";

import useStyles from "./LandingPage.style";

import animationData from "../../animations/landinganimation/data";
import ButtonArrow from "../../components/button/ButtonArrow";

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>
        <Grid container direction='row' justify='flex-end' alignItems='center'>
          <Grid sm item className={classes.heroTextContainer}>
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
                  <span style={{ marginRight: 10 }}>Learn more</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.savageBlue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width='100%' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;

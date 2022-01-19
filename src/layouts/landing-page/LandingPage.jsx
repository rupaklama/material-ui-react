import { Button, Card, CardContent, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import Lottie from "react-lottie";

import useStyles from "./LandingPage.style";

import animationData from "../../animations/landinganimation/data";
import ButtonArrow from "../../components/button/ButtonArrow";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
import revolutionBG from "../../assets/repeatingBackground.svg";
import { CallReceived } from "@material-ui/icons";

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* Hero Block */}
      <Grid item>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              By Savage Developers
            </Typography>

            <Grid container justify="center" className={classes.buttonContainer}>
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn more</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.savageBlue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width="100%" />
          </Grid>
        </Grid>
      </Grid>

      {/* Custom Services Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : null }}>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>

            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn more</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.savageBlue} />
            </Button>
          </Grid>

          <Grid item>
            <img className={classes.icon} src={customSoftwareIcon} alt="mobile phone icon" />
          </Grid>
        </Grid>
      </Grid>

      {/* Mobile App Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid item style={{ textAlign: matchesSM ? "center" : null }}>
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform!
            </Typography>

            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn more</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.savageBlue} />
            </Button>
          </Grid>

          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img className={classes.icon} src={mobileAppsIcon} alt="custom software icon" />
          </Grid>
        </Grid>
      </Grid>

      {/* Website Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : null }}>
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engine, built for speed!{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>

            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn more</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.savageBlue} />
            </Button>
          </Grid>

          <Grid item>
            <img className={classes.icon} src={websiteIcon} alt="website icon" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container alignItems="center" justify="center" style={{ height: "50vh", marginTop: "9em" }}>
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction="column" style={{ textAlign: "center" }}>
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology!
                  </Typography>

                  <Button variant="outlined" className={classes.learnButtonHero}>
                    <span style={{ marginRight: 10 }}>Learn more</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.savageBlue} />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <div
            style={{
              backgroundImage: `url(${revolutionBG})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;

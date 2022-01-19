import { createMuiTheme } from "@material-ui/core";

const savageBlue = "#0B72B9";
const savageOrange = "#ffba60";
const savageGrey = "#868686";

// overriding default theme object
export default createMuiTheme({
  // using palette to define our custom colors
  palette: {
    // default common colors
    common: {
      savageBlue: savageBlue,
      savageOrange: savageOrange,
    },
    // material UI will generate all the light & dark variants of primary + secondary
    // primary.light
    primary: {
      main: savageBlue,
    },
    secondary: {
      main: savageOrange,
    },
  },

  typography: {
    // defining our own global style for tab
    tab: {
      fontFamily: "Railway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "#fff",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: savageBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: savageBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: savageBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: savageGrey,
    },

    learnButton: {
      borderColor: savageBlue,
      color: savageBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});

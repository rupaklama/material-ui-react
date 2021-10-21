import { makeStyles } from '@material-ui/core/styles';

// creating inline style
export default makeStyles(
  // accessing our default theme - root
  theme => ({
    // className for styles
    toolbarMargin: {
      // to apply the default theme style - toolbar margin
      ...theme.mixins.toolbar,
      marginBottom: '3rem',
      // screen size medium & below
      [theme.breakpoints.down('md')]: {
        marginBottom: '2em',
      },
      // phones
      [theme.breakpoints.down('xs')]: {
        marginBottom: '1.25em',
      },
    },
    logo: {
      height: '8em',
      // screen size medium & below
      [theme.breakpoints.down('md')]: {
        height: '7em',
      },
      // phones
      [theme.breakpoints.down('xs')]: {
        height: '5.5em',
      },
    },
    logoContainer: {
      padding: 0,
      // to disable opacity overlay on hover
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    tabContainer: {
      marginLeft: 'auto',
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: '25px',
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '25px',
      height: '45px',
    },
    menu: {
      backgroundColor: theme.palette.common.savageBlue,
      color: '#fff',
      borderRadius: 0,
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      '&:hover': {
        opacity: 1,
      },
    },
    drawerIconContainer: {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    drawerIcon: {
      height: '30px',
      width: '30px',
    },
    drawer: {
      backgroundColor: theme.palette.common.savageBlue,
    },
    drawerItem: {
      ...theme.typography.tab,
      color: 'white',
      opacity: 0.7,
    },
    drawerItemEstimate: {
      backgroundColor: theme.palette.common.savageOrange,
    },
    drawerItemSelected: {
      opacity: 1,
    },
  })
);

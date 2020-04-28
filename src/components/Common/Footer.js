import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import FooterMenuList from "./FooterNavList";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import StarBorder from "@material-ui/icons/StarBorder";

const NavItems = [
  {
    icon: <StarBorder />,
    name: "Starred"
  },
  {
    icon: <SendIcon />,
    name: "Mail"
  },
  {
    icon: <DraftsIcon />,
    name: "Drafts"
  }
];

const styles = theme => ({
  flex: {
    flexGrow: 1
  },
  footer: {
    padding: 5,
    position: "absolute",
    textAlign: "center",
    left: 0,
    bottom: 0,
    right: 0,
	left:0,
	bottom:0,
	right:0,

    backgroundColor: "#1E88E5"
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.footer}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="subheading" color="inherit">
              Footer Content
            </Typography>

            <Typography color="inherit" variant="caption">
              You can use rows and columns of Material-UI Grid here to organize
              your footer content.
            </Typography>
          </Grid>

          <Divider />

          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography
                variant="caption"
                color="inherit"
                className={classes.flex}
              >
                © Copyright 2017
              </Typography>
              <Typography color="inherit" variant="caption">
                Terms and Conditions
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Paper>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
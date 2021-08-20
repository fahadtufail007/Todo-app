import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Logo from "../../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 18,
  },
  logo: {
    marginRight: theme.spacing(4),
    width: 100,
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.main,
  },
}));

function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <img className={classes.logo} src={Logo} alt="logo" />
          <Typography variant="h5" className={classes.title}>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppHeader;

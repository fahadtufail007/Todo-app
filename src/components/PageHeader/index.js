import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0px 25px",
  },
  logo: {
    marginRight: theme.spacing(2),
    width: 100,
  },
  title: {
    paddingTop: 10,
    fontSize: 20,
    flexGrow: 1,
    color: theme.palette.primary.main,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const PageHeader = ({ title, addMore, loading }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            width={"100%"}
            display="flex"
            justifyContent="space-between"
            spacing={3}
          >
            <Typography className={classes.title}>{title}</Typography>
            {addMore && (
              <IconButton
                aria-label="Add new todo"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {
                  addMore();
                }}
                color="inherit"
              >
                <Add />
              </IconButton>
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default PageHeader;

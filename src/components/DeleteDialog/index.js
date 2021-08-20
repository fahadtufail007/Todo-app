import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";

const DeleteDialog = ({ isOpen, handleFeedBack, itemTitle }) => {
  const useStyles = makeStyles((theme) => ({
    dangerBtn: {
      color: theme.palette.error.main,
    },
  }));
  const classes = useStyles();

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        handleFeedBack(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`Are you sure you want to delete "${itemTitle}" ?`}
      </DialogTitle>
      <DialogActions>
        <Button
          className={classes.dangerBtn}
          onClick={() => {
            handleFeedBack(true);
          }}
        >
          Yes
          </Button>
        <Button
          onClick={() => {
            handleFeedBack(false);
          }}
          color="primary"
          autoFocus
        >
          No
          </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;

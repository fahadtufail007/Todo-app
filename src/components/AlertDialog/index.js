import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

const AlertDiaog = ({ isOpen, onClose, message }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        onClose();
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{`${message}`}</DialogTitle>
      <DialogActions>
        <Button
          onClick={() => {
            onClose();
          }}
          color="primary"
          autoFocus
        >
          OK
          </Button>
      </DialogActions>
    </Dialog>
  );
}
export default AlertDiaog;
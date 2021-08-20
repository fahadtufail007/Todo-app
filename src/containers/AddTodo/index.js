import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Button, Grid } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import {
  addOrUpdateTodo,
  getTodoDetail,
} from "../../store/actions/todoActions";
import "./AddTodo.css";
import PageHeader from "../../components/PageHeader";
import AlertDiaog from "../../components/AlertDialog";

const TotoList = props => {
  const { getTodoDetail, loader, addOrUpdateTodo } = props;
  let pageTitle = props.title;
  const { id } = useParams();
  const history = useHistory();
  const [isError, setIsError] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  if (id !== "0") {
    pageTitle = "Update";
  }

  useEffect(() => {
    if (id !== "0") {
      getTodoDetail(id, (data) => {
        setTitle(data.title);
        setDescription(data.description);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="root">
      <PageHeader title={pageTitle + " Todo"} loading={loader} />
      <Grid container className="formContainer">
        <Grid item xs={12} md={12}>
          <FormControl fullWidth className="formGroup">
            <InputLabel required={true}>Title</InputLabel>
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth className="formGroup">
            <InputLabel>Description</InputLabel>
            <Input
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <br />
          <br />
          <Box fullWidth display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (!title) {
                  setIsError(true);
                } else {
                  addOrUpdateTodo({
                    id,
                    title,
                    description,
                    callBack: () => {
                      history.goBack();
                    },
                  });
                }
              }}
            >
              {pageTitle}
            </Button>
          </Box>
        </Grid>
        <AlertDiaog
          isOpen={isError}
          onClose={() => {
            setIsError(false);
          }}
          message="Title is required"
        ></AlertDiaog>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ todo }) => {
  const { todoList, loader } = todo;
  return { todoList, loader };
};
const mapdispatchToProps = { getTodoDetail, addOrUpdateTodo };

export default connect(mapStateToProps, mapdispatchToProps)(TotoList);

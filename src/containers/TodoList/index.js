import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import { v4 } from "uuid";
import {
  IconButton,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { getTodoList, deleteTodo } from "../../store/actions/todoActions";
import DeleteDialog from "../../components/DeleteDialog";
import PageHeader from "../../components/PageHeader";
import "./TodoList.css";
import { useHistory } from "react-router-dom";

function TotoList({ getTodoList, todoList, deleteTodo, title, loader }) {
  useEffect(() => {
    getTodoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let history = useHistory();
  const [isOpenDelDialog, setIsOpenDelDialog] = useState(false);
  const [delDialogTitle, setDelDialogTitle] = useState("");
  const [deleteTodoId, setDeleteTodoId] = useState(0);

  return (
    <div className="root">
      <PageHeader
        title={title}
        addMore={() => {
          history.push("/add/0");
        }}
        loading={loader}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          {todoList.map((todo) => (
            <div className="demo">
              <List>
                <ListItem key={v4()}>
                  <ListItemText
                    primary={todo.title}
                    secondary={todo.description}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="Edit"
                      onClick={() => {
                        history.push("/add/" + todo.id);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="Delete"
                      onClick={() => {
                        setIsOpenDelDialog(true);
                        setDeleteTodoId(todo.id);
                        setDelDialogTitle(todo.title);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </div>
          ))}
        </Grid>
      </Grid>
      <DeleteDialog
        isOpen={isOpenDelDialog}
        itemTitle={delDialogTitle}
        handleFeedBack={(sure) => {
          if (sure && deleteTodoId) {
            deleteTodo(deleteTodoId);
          }
          setIsOpenDelDialog(false);
          setDeleteTodoId(0);
          setDelDialogTitle("");
        }}
      />
    </div>
  );
}

const mapStateToProps = ({ todo }) => {
  const { todoList, loader } = todo;
  return { todoList, loader };
};
const mapdispatchToProps = { getTodoList, deleteTodo };

export default connect(mapStateToProps, mapdispatchToProps)(TotoList);

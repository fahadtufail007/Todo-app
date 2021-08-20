import { ActionTypes } from "./types";

export function getTodoList() {
  return {
    type: ActionTypes.GET_TODO_LIST_BEGIN,
  };
}

export function getTodoDetail(id, callBack) {
  return {
    type: ActionTypes.GET_TODO_DETAIL_BEGIN,
    payload: { id, callBack },
  };
}

export function addOrUpdateTodo(data) {
  return {
    type: ActionTypes.ADD_UPDATE_TODO_BEGIN,
    payload: data,
  };
}

export function deleteTodo(id) {
  return {
    type: ActionTypes.DELETE_TODO_BEGIN,
    payload: id,
  };
}

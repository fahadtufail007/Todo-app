import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { ActionTypes } from "../actions/types";
import { API_URL } from "../../constants";

/**
 * Get todo list
 */
export function* getTodoList() {
  try {
    yield put({
      type: ActionTypes.GET_TODO_LIST,
    });
    const response = yield call(axios.get, API_URL + "/todos");
    yield put({
      type: ActionTypes.GET_TODO_LIST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    yield put({ type: ActionTypes.GET_TODO_LIST_FAILURE, error });
  }
}

/**
 * Get todo Detail
 */
export function* getTodoDetail(action) {
  try {
    yield put({
      type: ActionTypes.GET_TODO_DETAIL,
    });

    const response = yield call(
      axios.get,
      API_URL + "/todos/" + action.payload.id
    );
    yield put({
      type: ActionTypes.GET_TODO_DETAIL_SUCCESS,
    });
    action.payload.callBack(response.data);
  } catch (error) {
    yield put({ type: ActionTypes.GET_TODO_DETAIL_FAILURE, error });
  }
}

/**
 * Add or Update todo
 */
export function* addOrUpdateTodo(action) {
  try {
    yield put({
      type: ActionTypes.ADD_UPDATE_TODO,
    });
    if (action.payload.id === "0") {
      yield call(axios.post, API_URL + "/todos", action.payload);
    } else {
      yield call(
        axios.put,
        API_URL + "/todos/" + action.payload.id,
        action.payload
      );
    }
    yield put({
      type: ActionTypes.ADD_UPDATE_TODO_SUCCESS,
    });
    action.payload.callBack();
  } catch (error) {
    yield put({ type: ActionTypes.ADD_UPDATE_TODO_FAILURE, error });
  }
}

/**
 * Delete todo
 */
export function* deleteTodo(action) {
  try {
    yield put({
      type: ActionTypes.DELETE_TODO,
    });
    yield call(axios.delete, API_URL + "/todos/" + action.payload);
    yield put({
      type: ActionTypes.GET_TODO_LIST_BEGIN,
    });
  } catch (error) {
    yield put({ type: ActionTypes.DELETE_TODO_FAILURE, error });
  }
}

/**
 * Todo Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.GET_TODO_LIST_BEGIN, getTodoList),
    takeLatest(ActionTypes.DELETE_TODO_BEGIN, deleteTodo),
    takeLatest(ActionTypes.GET_TODO_DETAIL_BEGIN, getTodoDetail),
    takeLatest(ActionTypes.ADD_UPDATE_TODO_BEGIN, addOrUpdateTodo),
  ]);
}

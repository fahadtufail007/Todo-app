import { ActionTypes } from "../actions/types";
const initialState = {
  todoList: [],
  loader: false,
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TODO_LIST:
      return {
        ...state,
        loader: true,
      };
    case ActionTypes.GET_TODO_LIST_SUCCESS:
      return {
        ...state,
        todoList: action.data,
        loader: false,
      };
    case ActionTypes.GET_TODO_LIST_FAILURE:
      return {
        ...state,
        loader: false,
      };
    case ActionTypes.GET_TODO_DETAIL:
      return {
        ...state,
        loader: true,
      };
    case ActionTypes.GET_TODO_DETAIL_SUCCESS:
      return {
        ...state,
        loader: false,
      };
    case ActionTypes.GET_TODO_DETAIL_FAILURE:
      return {
        ...state,
        loader: false,
      };
    case ActionTypes.ADD_UPDATE_TODO:
      return {
        ...state,
        loader: true,
      };
    case ActionTypes.ADD_UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loader: false,
      };
    case ActionTypes.ADD_UPDATE_TODO_FAILURE:
      return {
        ...state,
        loader: false,
      };
    default:
      return state;
  }
};

export default TodoReducer;

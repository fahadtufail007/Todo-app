import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";

export const routes = [
  {
    title: "Listing",
    path: "/",
    component: TodoList,
  },
  {
    title: "Add",
    path: "/add/:id",
    component: AddTodo,
  },
];

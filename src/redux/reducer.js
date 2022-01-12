import { combineReducers } from "redux";
import filterReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/TodoList/TodoSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters:  filterReducer(state.filters, action),
//     todoList: todoReducer(state.todoList, action),
//   }
// }

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;

import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesStatusSelector = (state) =>
  state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state)

//   const todoRemaining = state.todoList.filter((todo) =>
//     todo.name.includes(state.filters.search))
//   return todoRemaining;
// };

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesStatusSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.toLowerCase().includes(searchText) &&
              priorities.includes(todo.priority)
          : todo.name.toLowerCase().includes(searchText);
      }
      return (
        todo.name.toLowerCase().includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);

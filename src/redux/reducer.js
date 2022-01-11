const initState = {
  filters: {
    search: '',
    status: 'All',
    priority: []
  },
  todoList: [
    {id: 1, name: 'Learn English', completed: false, priority: 'Medium'},
    {id: 2, name: 'Learn React', completed: true, priority: 'Low'},
    {id: 3, name: 'Learn Vue', completed: false, priority: 'Hight'},
  ]
}

const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case 'todoList/addTodo': 
      return {
        ...state,
        todoList: [
          ...state.todoList,
          // {id: 4, name: 'Learn Chess', completed: false, priority: 'Low'},
          action.payload
        ]
      }
    case 'filters/searchFilterChange': 
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload
        }
      }
    default: 
      return state  
  }
}

export default rootReducer;
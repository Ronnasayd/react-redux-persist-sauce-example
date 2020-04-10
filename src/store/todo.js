import { createActions } from "reduxsauce";
import { createReducer } from "reduxsauce";
const INITIAL = { todo: [] };

export const { Types, Creators } = createActions({
  addTodo: ["text"],
  removeTodo: ["id"],
});

const addTodo = (state = INITIAL, action) => {
  return { todo: [...state.todo, action.text] };
};

const removeTodo = (state = INITIAL, action) => {
  const todo = state.todo.filter((value, index) => {
    return index !== action.id;
  });
  return { ...state, todo };
};

export const HANDLE = {
  [Types.ADD_TODO]: addTodo,
  [Types.REMOVE_TODO]: removeTodo,
};

export const reducer = createReducer(INITIAL, HANDLE);

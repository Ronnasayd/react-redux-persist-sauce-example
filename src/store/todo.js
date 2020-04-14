import { createActions } from "reduxsauce";
import { createReducer } from "reduxsauce";
import produce from "immer";

const INITIAL = { todo: [] };

export const { Types, Creators } = createActions({
  addTodo: ["text"],
  removeTodo: ["id"],
});

const addTodo = (state = INITIAL, action) => {
  const nextState = produce(state, (draftState) => {
    draftState.todo.push(action.text);
  });
  return nextState;
};

const removeTodo = (state = INITIAL, action) => {
  const nextState = produce(state, (draftState) => {
    draftState.todo = draftState.todo.filter((value, index) => {
      return index !== action.id;
    });
  });
  return nextState;
};

export const HANDLE = {
  [Types.ADD_TODO]: addTodo,
  [Types.REMOVE_TODO]: removeTodo,
};

export const reducer = createReducer(INITIAL, HANDLE);

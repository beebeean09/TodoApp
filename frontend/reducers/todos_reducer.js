import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const TodosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_TODO:
      debugger;
      const newTodo = {[action.todo.id]: action.todo};
      return Object.assign({}, state, newTodo);
    case RECEIVE_TODOS:
      nextState = {};
      action.todos.forEach(todo => {nextState[todo.id] = todo;});
      return nextState;
    case REMOVE_TODO:
      nextState = merge({}, state);
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
};

export default TodosReducer;

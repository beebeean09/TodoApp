import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const TodosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_TODO:
      return merge({}, state, action.todo);
    case RECEIVE_TODOS:
      return merge({}, state, action.todos);
    case REMOVE_TODO:
      nextState = merge({}, state);
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
};

export default TodosReducer;

import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';
import merge from 'lodash/merge';

const TodoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODO:
      return merge({}, state, action.todo);
    case RECEIVE_TODOS:
      return merge({}, state, action.todos);
    default:
      return state;
  }
};

export default TodoReducer;

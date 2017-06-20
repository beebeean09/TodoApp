import * as TodoAPIUtil from '../util/todo_api_util';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const fetchTodo = (id) => dispatch => {
  return TodoAPIUtil.fetchTodo(id)
          .then((todo) => dispatch(receiveTodo(todo))
          .then((err) => dispatch(receiveErrors(err.responseJSON))));
};

export const fetchTodos = () => dispatch => {
  debugger;
  return TodoAPIUtil.fetchTodos()
          .then((todos) => dispatch(receiveTodos(todos))
          .then((err) => dispatch(receiveErrors(err.responseJSON))));
};

export const createTodo = (todo) => dispatch => {
  return TodoAPIUtil.createTodo(todo)
          .then((todo1) => dispatch(receiveTodo(todo1))
          .then((err) => dispatch(receiveErrors(err.responseJSON))));
};

export const deleteTodo = (todo) => dispatch => {
  return TodoAPIUtil.deleteTodo(todo)
          .then((todo2) => dispatch(removeTodo(todo2)));
};

export const updateTodo = (todo) => dispatch => {
  return TodoAPIUtil.updateTodo(todo)
          .then((todo1) => dispatch(receiveTodo(todo1)));
};

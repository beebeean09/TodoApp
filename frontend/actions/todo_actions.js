import * as TodoAPIUtil from '../util/todo_api_util';
const RECEIVE_TODO = 'RECEIVE_TODO';
const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const fetchTodo = (id) => dispatch => {
  return TodoAPIUtil.fetchTodo(id)
          .then((todo) => dispatch(receiveTodo(todo)));
};

export const fetchTodos = () => dispatch => {
  return TodoAPIUtil.fetchTodos()
          .then((todos) => dispatch(receiveTodos(todos)));
};

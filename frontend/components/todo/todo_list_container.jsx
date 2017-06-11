import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import { fetchTodo, fetchTodos, createTodo, deleteTodo, updateTodo }
from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  state: state,
  // Use selector to turn object of todos into an array
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTodo: (id) => dispatch(fetchTodo(id)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

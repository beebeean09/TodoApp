import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import { fetchTodos, createTodo, updateTodo }
from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  state: state,
  // Use selector to turn object of todos into an array
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

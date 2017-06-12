import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import { receiveTodo, receiveTodos }
from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  state: state,
  // Use selector to turn object of todos into an array
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  receiveTodos: () => dispatch(receiveTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

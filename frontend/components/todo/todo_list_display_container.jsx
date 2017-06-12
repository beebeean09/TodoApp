import { removeTodo } from '../../actions/todo_actions';
import connect from 'react-redux';
import TodoListDisplay from './todo_list_display';

const mapDispatchToProps = dispatch => ({
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoListDisplay);

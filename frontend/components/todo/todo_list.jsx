import React from 'react';
import TodoListDisplay from './todo_list_display';
import TodoForm from './todo_form';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if (this.props.todos) {
      this.props.fetchTodos();      
    }
  }

  render() {
    debugger;
    const { todos, updateTodo, createTodo } = this.props;
    const todoItems = todos.map((todo,idx) => (
        <TodoListItem
          key={`todo-list-item${idx}`}
          todo={todo}
          updateTodo={ updateTodo } />
      )
    );

    return (
      <div className="todo-list-container">
        Hello this is the TODOLIST COMPONENT!
        <div className="todo-list">
          <h1>Todo List</h1>
          {todoItems}
        </div>
        <TodoForm createTodo={createTodo}/>
      </div>
    );
  }
}

export default TodoList;

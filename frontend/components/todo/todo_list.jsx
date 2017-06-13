import React from 'react';
import TodoListDisplay from './todo_list_display';
import TodoForm from './todo_form';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { todos, updateTodo } = this.props;
    const todoItems = todos.map(todo => (
        <TodoListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          updateTodo={ updateTodo } />
      )
    );

    // <TodoForm receiveTodo={receiveTodo}/>
    return (
      <div>
        Hello this is the TODOLIST COMPONENT!
        <div className="todo-list">
          <h1>Todo List</h1>
          {todoItems}
        </div>
      </div>
    );
  }
}

export default TodoList;

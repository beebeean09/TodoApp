import React from 'react';
import TodoListDisplay from './todo_list_display';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const todos = this.props.todos.map((todo, idx) =>
      <ul key={idx}>
        {todo.title}
        {todo.body}
      </ul>
    );

    return (
      <div>
        Hello this is the TODOLIST COMPONENT!
        <div>
          <h1>Todo List</h1>
          {todos}
        </div>
        <TodoListDisplay/>
      </div>
    );
  }
}

export default TodoList;

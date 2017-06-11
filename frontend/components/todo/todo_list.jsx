import React from 'react';

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
      </div>
    );
  }
}

export default TodoList;

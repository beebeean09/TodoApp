import React from 'react';
import merge from 'lodash/merge';
import TodoListDisplay from './todo_list_display';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { detail: false };
    this.toggleDetail = this.toggleDetail.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  toggleTodo(e) {
    e.preventDefault();
    const toggledTodo = merge({}, this.props.todo, {
      done: !this.props.todo.done
    });
    debugger;
    this.props.updateTodo(toggledTodo);
  }

  render() {
    const { todo } = this.props;
    const { title, done } = todo;
    let detail;
    if (this.state.detail) {
      detail = <TodoListDisplay todo={todo} />;
    }

    return(
      <ul>
        <div className="todo-list-item">
          <h3><a onClick={this.toggleDetail}>{title}</a></h3>
          <button
            className={done ? "done" : "undone"}
            onClick={this.toggleTodo}>
            {done ? "Undo" : "Done"}
          </button>
        </div>
        {detail}
      </ul>
    );
  }
}

export default TodoListItem;

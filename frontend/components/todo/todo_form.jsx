import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSumbit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  update(field) {
    return e => this.setState({[field] : e.target.value});
  }

  render() {
    const { createTodo } = this.props;

    return(
      <div>Hello from the form
      <form onSubmit={this.handleSubmit}>
        <label>Title
          <input
            value={this.state.title}
            placeholder="Title"
            onChange={this.update('title')}/></label>
        <label>Body
          <input
            value={this.state.body}
            placeholder="Body"
            onChange={this.update('body')}/></label>
        <button>Create Todo</button>
      </form>
    </div>
    );
  }
}

export default TodoForm;

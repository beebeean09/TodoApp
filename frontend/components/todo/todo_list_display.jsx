import React from 'react';
import StepListContainer from '../step/step_list_container';

class TodoListDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { removeTodo, todo } = this.props;


    return(
      <div>
        This is the TodoListDisplay!
        <StepListContainer todo={ todo }/>
        <button onClick={removeTodo}>Delete</button>
      </div>
    );
  }
}

export default TodoListDisplay;

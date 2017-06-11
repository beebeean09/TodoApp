import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP } from '../actions/step_actions';
import merge from 'lodash/merge';


const initialState =
{
  1: {
    title: "walk to store",
    done: false,
    todo_id: 1
  },
  2: {
    title: "buy soap",
    done: false,
    todo_id: 1
  }
};

const StepsReducer = (state = initialState, action) => {
  Object.assign(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_STEPS:
      nextState = merge({}, state);
      action.steps.forEach((step) => nextState[step.id]);
      return nextState;
    case RECEIVE_STEP:
      return merge({}, state, action.step );
    case REMOVE_STEP:
      nextState = merge({}, state);
      delete nextState[action.step.id];
      return nextState;
    default:
      return state;
  }
};

export default StepsReducer;

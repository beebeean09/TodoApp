import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import GifReducer from './gif_reducer';
import TodosReducer from './todos_reducer';
import StepsReducer from './steps_reducer';

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  gif: GifReducer,
  todos: TodosReducer,
  steps: StepsReducer
});

export default RootReducer;

import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer'; // Assuming you have an example reducer

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;

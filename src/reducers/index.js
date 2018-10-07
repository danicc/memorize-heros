import { combineReducers } from 'redux';
import data from './data';
import game from './game';

const rootReducer = combineReducers({
  data,
  game
});

export default rootReducer;
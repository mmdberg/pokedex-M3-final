import { combineReducers } from 'redux';
import { typeReducer } from './typeReducer';

const rootReducer = combineReducers({
  typeData: typeReducer
})

export default rootReducer

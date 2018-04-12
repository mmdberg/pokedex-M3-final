import { combineReducers } from 'redux';
import fakeReducer from './fake-reducer';
import { typeReducer } from './typeReducer';

const rootReducer = combineReducers({
  fake: fakeReducer,
  typeData: typeReducer
})

export default rootReducer

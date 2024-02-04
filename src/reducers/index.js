'use strict';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

//Custom defined reducers
import user from './user';


export default combineReducers({
  routing,
  user
});

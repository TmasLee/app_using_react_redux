import {combineReducers} from 'redux';
import errors from './errors';
import hero from './hero';

export default combineReducers({
  errors: errors,
  hero: hero
})
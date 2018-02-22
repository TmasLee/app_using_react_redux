// import {ActionTypes as types} from '../Constants';

var defaultState = {
  errorMsg: ''
}

function errors(state = defaultState, action){
  switch (action.type){
    case('UNSUCCESSFUL_FETCH'):
      return {
        ...state,
        errorMsg: action.data.msg
      }
    case('SUCCESSFUL_FETCH'):
      return {
        ...state,
        errorMsg: action.data.msg
      }
    case('FETCH_HERO_FAILURE'):
      return {
        ...state,
        errorMsg: action.data.msg
      }
    case('FETCH_HERO_SUCCESS'):
      return {
        ...state,
        errorMsg: ''
      }
    default:
      return state;
  }
}

export default errors;
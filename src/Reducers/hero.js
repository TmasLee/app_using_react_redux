// import {ActionTypes as types} from '../Constants';

var defaultState = {
  heroQuery: '',
  hero: null,
  heroName: '',
  heroPortrait: '',
  role: ''
}

function hero(state = defaultState, action){
  switch (action.type){
    case('CHANGE_HERO_QUERY'):
      return {
        ...state,
        heroQuery: action.data.newQuery
      }
    case('FETCH_HERO'):
      return {
        ...state,
        heroName: action.data.newQuery
        }
    case('FETCH_HERO_SUCCESS'):
      return {
        ...state,
        hero: action.data,
        heroName: action.data.name,
        heroPortrait: action.data.icon_url['92x93'],
        role: action.data.role
      }
      
    default:
      return state;
  }
}

export default hero;
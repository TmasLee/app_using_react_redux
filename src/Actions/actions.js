import debounce from 'lodash.debounce';

export function changeHeroQuery(newQuery){
  return {
    type: 'CHANGE_HERO_QUERY',
    data: {newQuery: newQuery}
  }
}

export function fetchHero(newQuery){
  return (dispatch) => {
    callFetchHero(newQuery, dispatch);
  }
}

function _callFetchHero(newQuery, dispatch){
  // dispatch({
  //   type: 'FETCH_HERO',
  //   data: newQuery
  // });
  fetch(`http://hotsapi.net/api/v1/heroes/${newQuery}`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: 'FETCH_HERO_SUCCESS',
      data: response
    })
  })
  .catch((err) => {
    var msg = 'Hero not found xD';
    dispatch({
      type: 'FETCH_HERO_FAILURE',
      data: {msg: msg}
    })
  })
}

var callFetchHero = debounce(_callFetchHero, 300);



export function changeAndFetchHeroQuery(){

}
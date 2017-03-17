var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
  // the above is the ES6 way to do the following:
  // state = state || {name: 'Anonymous'};

  switch (action.type) {
      case 'CHANGE_NAME':
        return {
          ...state,
          name: action.name
        };
      case 'ADD_HOBBY':
        return {
          ...state,
          hobbies: [
            ...state.hobbies,
            {
              id: nextHobbyId++,
              hobby: action.hobby
            }
          ]
        };
      case 'REMOVE_HOBBY':
        return {
          ...state,
          // hobbies: state.hobbies.filter(function(hobby) {
          //   return hobby.id !== action.id
          // });
          // This can be rewritten as because only 1 statement and it returns
          hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
        }
      case 'ADD_MOVIE':
        return {
          ...state,
          movies: [
            ...state.movies,
            {
              id: nextMovieId++,
              title: action.title,
              genre: action.genre
            }
          ]
        }
      case 'REMOVE_MOVIE':
        return {
          ...state,
          movies: state.movies.filter((movie) => movie.id !== action.id)
        }
      default:
        return state;
  }
};

// var store = redux.createStore(reducer, redux.compose(
  // window.devToolsExtension ? window.devToolsExtension() : f => f
  // f => f is short for:
  // f => function () {
  // }

var store = redux.createStore(reducer, redux.compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

});
// unsubscribe();

var currentState = store.getState();
console.log('Current State', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Walter'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Gone With the Wind',
  genre: 'Drama'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'This is Spinal Tap',
  genre: 'Comedy'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Alien',
  genre: 'Sci-fi'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});

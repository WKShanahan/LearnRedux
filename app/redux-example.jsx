var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  // the above is the ES6 way to do the following:
  // state = state || {name: 'Anonymous'};

  switch(action.type) {
      case 'CHANGE_NAME':
        return {
          ...state,
          name: action.name
        };
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
  type: 'CHANGE_NAME',
  name: 'Emily'
});

var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  // the above is the ES6 way to do the following:
  // state = state || {name: 'Anonymous'};

  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('Current State', currentState);
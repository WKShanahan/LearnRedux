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

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('Current State', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Walter'
});

console.log('Name should be Walter', store.getState())

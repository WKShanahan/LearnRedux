var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  switch(action.type) {
      case 'CHANGE_SEARCH_TEXT':
        return {
          ...state,
          searchText: action.searchText
        };
      default:
        return state;
  }
  return state;
};

var store = redux.createStore(reducer, redux.compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Search Text is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;

});
// unsubscribe();


var currentState = store.getState();
// console.log('Current State', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'text test'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Walter'
});

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import App from './App.js';
import { reducer, add, remove, addAsync } from './index.redux.js';

const store = createStore(reducer, applyMiddleware(thunk));

function render() {
  ReactDOM.render(
    <App store={store} add={add} remove={remove} addAsync={addAsync}/>,
    document.getElementById('root')
  );
}
render()

store.subscribe(() => {
  render()
})





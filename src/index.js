import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import App from './App.js';
import { reducer } from './index.redux.js';

const store = createStore(reducer, applyMiddleware(thunk));

// function render() {
//   ReactDOM.render(
//     <App store={store} add={add} remove={remove} addAsync={addAsync} />,
//     document.getElementById('root')
//   );
// }
// render()

// store.subscribe(() => {
//   render()
// })

ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
)




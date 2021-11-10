import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducerApp from './reducers/reducer';
const store = createStore(reducerApp);
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

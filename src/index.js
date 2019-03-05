import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App.jsx';
import Tacos from './components/Tacos';
import { Provider } from 'react-redux';
import store from './redux/store';

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store = { store } >
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/tacos' component={Tacos} />
      </div>
  </Router>
</Provider>,
  document.getElementById('root')
);

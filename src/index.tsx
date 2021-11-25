import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Main } from './components/Main/Main';
import { store } from './redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';


ReactDOM.render(
  <Provider store={store}>

    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Main />

      </QueryParamProvider>
    </Router>
  </Provider >,
  document.getElementById('root')
);



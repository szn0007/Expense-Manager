import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './action/expenses';
import {setTextFilter} from './action/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/style.scss';

const store = configureStore();

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

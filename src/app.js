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

const expenseOne = store.dispatch(addExpense({description : 'Water Bill', amount : 4500}));
const expenseTwo = store.dispatch(addExpense({description : 'Gas Bill', createdAt : 1000}));
const expenseThree = store.dispatch(addExpense({description : 'Rent', amount : 109500}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

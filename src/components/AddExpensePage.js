import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../action/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => (
  <div>
    <h1>ADD EXPENSE</h1>
    <ExpenseForm
      onSubmit = {(expense) => {
        props.dispatch(startAddExpense(expense));
        props.history.push('/');
      }}/>
  </div>
);

export default connect()(AddExpensePage);

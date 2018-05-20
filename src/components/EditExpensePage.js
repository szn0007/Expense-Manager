import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense ,startRemoveExpense} from '../action/expenses';

const EditExpensePage = (props) => {
  // console.log(props.expenses);
  return (

    <div>
      <div className = "page-header">
        <div className = "content-container ">
          <h1 className = "page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className = "content-container">

        <ExpenseForm
          expense = {props.expense}
          onSubmit = { (expense) => {
            // console.log('updated',expense);
            props.dispatch(startEditExpense(props.expense.id, expense));
            props.history.push('/');
          }}/>

        <button className = "button button__secondary" onClick = {() => {
              props.dispatch(startRemoveExpense({ id : props.match.params.id }))
              props.history.push('/');
              // console.log(props.match.params.id);
        }}>Remove Expense</button>

      </div>
    </div>
  );
};

const mapStateToProps = (state , props) => {
  return {
    expense : state.expenses.find((expense) => expense.id === props.match.params.id)
  };
}

export default connect(mapStateToProps)(EditExpensePage);

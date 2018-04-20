import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense ,removeExpense} from '../action/expenses';

const EditExpensePage = (props) => {
  // console.log(props.expenses);
  return (

    <div>
      <ExpenseForm
        expense = {props.expense}
        onSubmit = { (expense) => {
          // console.log('updated',expense);
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}/>

      <button onClick = {() => {
            props.dispatch(removeExpense({ id : props.match.params.id }))
            props.history.push('/');
            // console.log(props.match.params.id);
          }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state , props) => {
  return {
    expense : state.expenses.find((expense) => expense.id === props.match.params.id)
  };
}

export default connect(mapStateToProps)(EditExpensePage);

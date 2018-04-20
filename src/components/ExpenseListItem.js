import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// const ExpenseListItem = (props) => (
//   <div>
//     {
//       props.expenses.map((expense) => <li> {expense.description} || {expense.amount} || {expense.createdAt}</li>)
//     }
//   </div>
// );
//
// const mapStateToProps = (state) => {
//   return {
//     expenses : state.expenses,
//     filters : state.filters
//   };
// };
//
// export default connect(mapStateToProps)(ExpenseListItem);

const ExpenseListItem = ({id,description,amount,createdAt}) => (
  <div>
    <h3>{description}</h3>
    <p>Amount : {amount} - Date: {createdAt}</p>
    <Link to = {`/edit/${id}`}><button>Edit Expense</button></Link>
  </div>
);


export default ExpenseListItem;

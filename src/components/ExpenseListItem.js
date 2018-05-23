import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

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
//
// const ExpenseListItem = ({id,description,amount,createdAt}) => (
//   <div>
//     <h3>{description}</h3>
//     <p>
//       {numeral(amount).format('$0,0.00')}
//       -
//       {moment(createdAt).format('MMMM Do, YYYY')}
//     </p>
//     <Link to = {`/edit/${id}`}><button>Edit Expense</button></Link>
//   </div>
// );

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Link className = "list-item" to={`/edit/${id}`}>
      <div>
        <h3 className = "list-item__title">{description}</h3>
        <span className = "list-item__sub-title">
          {moment(createdAt).format('MMMM Do, YYYY')}
        </span>
      </div>

      <div className = "list-item__data">
          {numeral(amount).format('$0,0.00')}
      </div>
    </Link>
);

export default ExpenseListItem;

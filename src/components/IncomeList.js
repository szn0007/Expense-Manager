import React from 'react';
import { connect } from 'react-redux';
import IncomeListItem from './IncomeListItem';
import ExpenseListFilters from './ExpenseListFilters';
import selectIncome from '../selectors/income';

const IncomeList = (props) => (
  <div>
  <div className = "page-header">
      <div className = "content-container">
          <h1 className = "page-header__title">INCOME LISTS</h1>
      </div>
  </div>
  <div className = "content-container">
    <ExpenseListFilters />
    <div className = "list-header">
      <div className = "show-for-mobile">Incomes</div>
      <div className = "show-for-desktop">Income</div>
      <div className = "show-for-desktop">Amount</div>
    </div>
    <div className = "list-body">
    {
      props.income.length === 0 ? (
        <div className = "list-item list-item--message">
          <span>No Income</span>
        </div>
      ) : (
          props.income.map((income) => {
            return <IncomeListItem key={income.id} {...income} />;
          })
        )
    }
    </div>
  </div>
  </div>
);

const mapStateToProps =  (state) => {
  return {
    income : selectIncome(state.income, state.filters)
  };
};

export default connect(mapStateToProps)(IncomeList);

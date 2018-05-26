import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectIncome from '../selectors/income';
import selectExpensesTotal from '../selectors/expenses-total';
import selectIncomeTotal from '../selectors/income-total';
// <h1 className = "page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} Totalling
//   <span> {formattedExpensesTotal}</span></h1>
export const ExpensesSummary = ({ expenseCount, expensesTotal, incomeTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00');
  const formattedIncomeTotal = numeral(incomeTotal).format('$0,0.00');
  const LeftOverTotal = ( incomeTotal - expensesTotal );
  const formattedLeftOverTotal = numeral(LeftOverTotal).format('$0,0.00');
  const zero = numeral(0).format('$0,0.00');

  console.log(formattedLeftOverTotal);
  console.log(zero);

  return (
    <div className= "page-header">
      <div className = "content-container">

        <h1 className = "page-header__title">Finance Summary</h1>
          <div>
            <ul className = "page-header__list">
              <li>Income  : <span> {formattedIncomeTotal}</span> </li>
              <li>Expense : <span> {formattedExpensesTotal}</span> </li>
              <li>LeftOver: {LeftOverTotal < 0 ? React.createElement('strong',{},formattedLeftOverTotal) :
                React.createElement('span',{},formattedLeftOverTotal) } </li>
            </ul>
          </div>

        <div className = "page-header__actions">
          <span><Link className="button" to = "/create">Create Expense</Link></span>
          <span><Link className="button" to = "/income" >Add Income</Link></span>
          <span><Link className="button" to = "/income-list" >Income List</Link></span>
          <Link className="button" to = "/chart" >Chart</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const visibleIncome = selectIncome(state.income, state.filters);

  return {
    expenseCount : visibleExpenses.length,
    expensesTotal : selectExpensesTotal (visibleExpenses),
    incomeTotal : selectIncomeTotal (visibleIncome)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

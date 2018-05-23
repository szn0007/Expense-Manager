import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';

const Chart = (props) => (
  <div>
    <div className = "page-header">
        <div className = "content-container">
            <h1 className = "page-header__title">CHART</h1>
        </div>
    </div>
    <div className = "content-container">
      {
        console.log(props.expenses)
      }
      </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses : selectExpenses(state.expenses, state.filters)
  };
}


export default connect(mapStateToProps)(Chart);

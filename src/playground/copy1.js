import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import {Line} from 'react-chartjs-2';
import moment from 'moment';

class Chart extends React.Component{

  constructor(props) {
    super(props);
    console.log(props.expenses);
    const amount = props.expenses.map((expense) => {
      // console.log(expense.amount);
      // console.log(moment(expense.createdAt).format('MMMM'));
      return expense.amount;
    });
  console.log(amount);

    const createdAt = props.expenses.map((expense) => {
      const arr_createdAt = expense.createdAt;
      return moment(arr_createdAt).format('MMMM');
    });
  console.log(createdAt);

    this.state = {

    };
  };

  render(){
    return(
      <div>
        <div className = "page-header">
            <div className = "content-container">
                <h1 className = "page-header__title">CHART</h1>
            </div>
        </div>
        <div className = "content-container">
              <h2>Line Example</h2>

          </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return{
    // expenses : selectExpenses(state.expenses, state.filters)
    expenses : state.expenses
  };
}

export default connect(mapStateToProps)(Chart);

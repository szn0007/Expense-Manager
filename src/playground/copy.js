import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import {Line} from 'react-chartjs-2';
import moment from 'moment';


const Chart = (props) => {
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

  const data = {
  labels: createdAt,
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: amount
    }
  ]
};

return (
  <div>
    <div className = "page-header">
        <div className = "content-container">
            <h1 className = "page-header__title">CHART</h1>
        </div>
    </div>
    <div className = "content-container">
          <h2>Line Example</h2>
          <Line data={data} />
      </div>
  </div>
)};

const mapStateToProps = (state) => {
  return {
    // expenses : selectExpenses(state.expenses, state.filters)
    expenses : state.expenses
  };
}


export default connect(mapStateToProps)(Chart);

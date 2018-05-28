import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import {Line} from 'react-chartjs-2';
import moment from 'moment';


const Chart = (props) => {
  console.log(props.expenses);
//   const amount = props.expenses.map((expense) => {
//     // console.log(expense.amount);
//     // console.log(moment(expense.createdAt).format('MMMM'));
//     return expense.amount;
//   });
// console.log(amount);
//
//   const createdAt = props.expenses.map((expense) => {
//     const arr_createdAt = expense.createdAt;
//     return moment(arr_createdAt).format('MMMM');
//   });
// console.log(createdAt);

let reducedValue = props.expenses.reduce((acc, item) => {
    let index = acc.findIndex(accItem =>
      moment(accItem.createdAt).format('MMM') === moment(item.createdAt).format('MMM'));
    if(index < 0){
        acc.push({...item});
    } else {
        acc[index].amount += item.amount;
    }
    return acc;
}, []);
let amount = reducedValue.map(item => item.amount );
let createdAt = reducedValue.map(item => moment(item.createdAt).format('MMMM'));



// var arr = [];

// for (var i = 0; i < createdAt.length; i++) {
//   arr[createdAt[i]] = amount[i];
//   console.log(arr);
// }

// var months = ["January", "February", "March", "April", "May", "June",
//   	        "July", "August", "September", "October", "November", "December"];
//
// var sorted_keys = Object.keys(arr).sort(function(a,b){
//
//   return months.indexOf(a)
//            - months.indexOf(b);
// });
//
// console.log(arr);

// arr.sort(function(a,b){
//   var aCD = a.createdAt;
//
//   return months.indexOf(a.key)
//            - months.indexOf(b.key);
// });
//
// createdAt.sort(function(a,b){
//   return months.indexOf(a)
//            - months.indexOf(b);
// });

console.log(amount);
console.log(createdAt);


//
// var monthsHash = {
//     "January": 1,
//     "February": 2,
//     "March": 3,
//     "April": 4,
//     "May": 5,
//     "June": 6,
//     "July": 7,
//     "August": 8,
//     "September": 9,
//     "October": 10,
//     "November": 11,
//     "December": 12
// };
//
// input.sort(function (a, b) {
//     var a_month = a.split(":")[0],
//         b_month = b.split(":")[0],
//         a_month_rank = monthsHash[a_month],
//         b_month_rank = monthsHash[b_month];
//
//     return a_month_rank - b_month_rank;
// });
//
// console.log(input);
//
// function sortByMonth(arr) {
//   var months = ["January", "February", "March", "April", "May", "June",
//   	        "July", "August", "September", "October", "November", "December"];
//   arr.sort(function(a, b){
//       return months.indexOf(a.values.Month.displayValue)
//            - months.indexOf(b.values.Month.displayValue);
//   });


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

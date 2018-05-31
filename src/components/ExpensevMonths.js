import React from 'react';
import {Line , Doughnut} from 'react-chartjs-2';

const ExpensevMonths = (expenses) => {
  console.log(expenses);
  // let reducedValue = props.expenses.reduce((acc, item) => {
  //     let index = acc.findIndex(accItem =>
  //       moment(accItem.createdAt).format('YYYYMMM') === moment(item.createdAt).format('YYYYMMM'));
  //     if(index < 0){
  //         acc.push({...item});
  //     } else {
  //         acc[index].amount += item.amount;
  //     }
  //     return acc;
  // }, []);
  // console.log(reducedValue);
  //
  //
  // function compare(a,b) {
  //   if (a.createdAt < b.createdAt)
  //     return -1;
  //   if (a.createdAt > b.createdAt)
  //     return 1;
  //   return 0;
  // }
  //
  // reducedValue.sort(compare);
  //
  // console.log(reducedValue);
  //
  // let sumAmount = reducedValue.map(item => item.amount );
  // let sumCreatedAt = reducedValue.map(item => moment(item.createdAt).format('MMMM'));
  //
  // console.log(amount);
  // console.log(createdAt);
  //
  //
  //   const data = {
  //   labels: sumCreatedAt,
  //   datasets: [
  //     {
  //       label: 'Expense vs Month',
  //       fill: false,
  //       lineTension: 0.1,
  //       backgroundColor: 'rgba(75,192,192,0.4)',
  //       borderColor: 'rgba(75,192,192,1)',
  //       borderCapStyle: 'butt',
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: 'miter',
  //       pointBorderColor: 'rgba(75,192,192,1)',
  //       pointBackgroundColor: '#fff',
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  //       pointHoverBorderColor: 'rgba(220,220,220,1)',
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 1,
  //       pointHitRadius: 10,
  //       data: sumAmount
  //     }
  //   ]
  // };

  return(
    <div>
      <Line />
    </div>
  )
};


export default ExpensevMonths;

import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import {Line} from 'react-chartjs-2';
import moment from 'moment';

export default class Chart extends React.Component{
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
              <Line data={data} />
          </div>
      </div>
    );
  };
};
  

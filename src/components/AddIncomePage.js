import React from 'react';
import IncomeForm from './IncomeForm';
import { connect } from 'react-redux';
import {startAddIncome} from '../action/income';

const Income = (props) => (
  <div>
    <div className = "page-header">
        <div className = "content-container">
            <h1 className = "page-header__title">ADD INCOME</h1>
        </div>
    </div>
    <div className = "content-container">
      <IncomeForm onSubmit = {(income) => {
        props.dispatch(startAddIncome(income));
        console.log(props);
        props.history.push('/income-list');
      }}/>
    </div>
  </div>
);


export default connect()(Income);

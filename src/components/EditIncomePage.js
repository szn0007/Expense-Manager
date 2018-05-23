import React from 'react';
import { connect } from 'react-redux';
import IncomeForm from './IncomeForm';
import {startEditIncome ,startRemoveIncome} from '../action/income';

const EditIncomePage = (props) => {
  console.log(props.income);
  return (

    <div>
      <div className = "page-header">
        <div className = "content-container ">
          <h1 className = "page-header__title">Edit Income</h1>
        </div>
      </div>
      <div className = "content-container">

        <IncomeForm
          income = {props.income}
          onSubmit = { (income) => {
            // console.log('updated',income);
            props.dispatch(startEditIncome(props.income.id, income));
            props.history.push('/income-list');
          }}/>

        <button className = "button button__secondary" onClick = {() => {
              props.dispatch(startRemoveIncome({ id : props.match.params.id }))
              props.history.push('/income-list');
              // console.log(props.match.params.id);
        }}>Remove Income</button>

      </div>
    </div>
  );
};

const mapStateToProps = (state , props) => {
  return {
    income : state.income.find((income) => income.id === props.match.params.id)
  };
}

export default connect(mapStateToProps)(EditIncomePage);

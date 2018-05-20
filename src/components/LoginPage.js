import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../action/auth';


export const LoginPage = ({startLogin}) => (
  <div className = "box-layout">
    <div className = "box-layout__box">
        <h1 className = "box-layout__title">Expense Manager</h1>
        <p>Track Your Expenses.</p>
        <button onClick = { startLogin } className = "button">Login With Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

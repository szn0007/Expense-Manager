// HOC --> A component (HOC) that renders another components..

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The Info is : {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please donot share.</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated && <WrappedComponent {...props} /> || <p>Please Login To See The Info!!</p>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthenticateInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin = {true} info= "These are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthenticateInfo isAuthenticated = {false} info= "These are the details"/>, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter , { history } from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses } from './action/expenses';
import {login , logout} from './action/auth';
import getVisibleExpenses from './selectors/expenses';
import './styles/style.scss';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // console.log('Logged In');
    console.log(user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
    renderApp();
    if(history.location.pathname === '/'){
      history.push('/dashboard');
    }
    });
  } else {
    // console.log('Logged Out!');
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

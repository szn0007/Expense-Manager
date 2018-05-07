import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// STORE CREATION
export default () => {
  const store = createStore(
    combineReducers({
      expenses : expenseReducer,
      filters : filtersReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

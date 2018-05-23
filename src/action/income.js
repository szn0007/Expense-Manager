import uuid from 'uuid';
import database from '../firebase/firebase';

// INCOME ACTION GENERATORS


//ADD INCOME
export const addIncome = (income) => ({
  type : 'ADD_INCOME',
  income
});

export const startAddIncome = (IncomeData = {}) => {
  return (dispatch , getState) => {
    const uid = getState().auth.uid;
    const {
      description = '' ,
      note = '',
      amount = 0,
      createdAt = 0
    } = IncomeData;

    const income = {description, note, amount, createdAt};

    database.ref(`Users/${uid}/income`).push(income).then((ref) => {
      dispatch(addIncome({
        id : ref.key,
        ...income
      }))
    });
  };
};


// Retrieve Income
export const setIncome = (income) => ({
  type: 'SET_INCOME',
  income
});

export const startSetIncome = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`Users/${uid}/income`).once('value').then((snapshot) => {
      const income = [];

      snapshot.forEach((childSnapshot) => {
        income.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      // console.log(income);
      dispatch(setIncome(income));
    });
  };
};

export const removeIncome = ({ id = ''} = {}) => ({
  type : 'REMOVE_INCOME',
  id
});

export const startRemoveIncome = ({ id } = {}) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    return database.ref(`Users/${uid}/income/${id}`).remove().then(() => {
      dispatch(removeIncome({ id }));
    });
  };
};

export const editIncome = (id, updates) => ({
  type : 'EDIT_INCOME',
  id,
  updates
});

export const startEditIncome = (id, updates) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    return database.ref(`Users/${uid}/income/${id}`).update(updates).then(() => {
      dispatch(editIncome(id , updates));
    });
  };
};

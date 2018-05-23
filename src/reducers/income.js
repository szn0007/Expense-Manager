// INCOME Reducer

const incomeReducerDefaultState = [];

export default (state = incomeReducerDefaultState , action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return [
        ...state,
        action.income
      ];
    case 'SET_INCOME':
      return action.income;
    case 'REMOVE_INCOME':
        return state.filter(({ id }) => id !== action.id);
      case 'EDIT_INCOME':
        return state.map((income) => {
          if (income.id === action.id) {
            return {
              ...income,
              ...action.updates
            };
          } else {
            return income;
          };
        });
    default:
      return state;
  }
};

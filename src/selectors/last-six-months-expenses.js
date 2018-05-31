import moment from 'moment';

// get visible last 6 months expenses
export default (expenses, {text, sortBy, startDate ,endDate}) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const now = moment();
    const startDateMatch = createdAtMoment > now.add(-6, 'months').toDate() ? true:false;
    const endDateMatch = now;

    return startDateMatch && endDateMatch;
  })
};

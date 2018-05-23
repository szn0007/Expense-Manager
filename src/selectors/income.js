import moment from 'moment';

// get visible incomes
export default (income, {text, sortBy, startDate ,endDate}) => {
  return income.filter((income) => {
    const createdAtMoment = moment(income.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
    const textMatch = income.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
      if(sortBy === 'date'){
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      else if (sortBy === 'amount'){
        return a.amount < b.amount ? 1 : -1;
      }
  });
};

export default (income) => {
  return income
    .map((income) => income.amount)
    .reduce((sum , value) => sum + value , 0);
}

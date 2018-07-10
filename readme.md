# Git Commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits

#APPLICACTION TOUR

1. Every User must login to the application via Google Account.
2. Once Google authenticates the account , User is redirected to the application dashboard.
3. Firebase (DATABASE) Rules are managed in such a way that every user has their own private Expense Management Database.
4. The top navigation bar has 2 routes configured, which are named EXPENSE MANAGER and LOGOUT. LOGOUT redirects the USER to be unauthenticated and leave the application where as EXPENSE MANAGER routes USER to the dashboard(Like a Home Button) from anywher.
5. Sub-Navigation has 2 main parts.
  a. First part show the expense datas i.e. Total Expense count and Expense sum.
  b. Second Part shows the four buttons i.e. Create Expense , Add Income, Income List and Chart.
6. Create Expense allows user to Add an expense. It routes user to Create Expense component.
7. After the forms are filled and saved in Create Expense page, it redirects User to Dashboard showing their Expenses.
8. Add Income is same as Create Expense component , the only difference is that this component adds income details.
9. After adding income it is redirected to Income List component. Which behaves same as Expense Dashboard Page.
10. Chart component shows the the datas visualization.
11. Below the Sub-navigation is the Search Input parts which contains Text Filter, Sort by Date or Amount and Date Range filters.


Live Demo: https://react-expense-manager-sujan.herokuapp.com/

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
4. The navigation bar has 2 routes configured, which are named EXPENSE MANAGER and LOGOUT. LOGOUT redirects the USER to be unauthenticated and leave the appliction where as EXPENSE MANAGER routes USER to the dashboard.
5. Sub-Navigation has 3 main parts. 
  a. First part show the expense datas i.e. Total Expense count and Expense sum.
  b. Second Part shows the two buttons i.e. Create Expense and Add Income.
6. Create Expense allows user to Add an expense. It routes user to Create Expense component.
7. After the forms are filled and saved in Create Expense page, it redirects User to Dashboard showing their Expenses.
8. 3rd part shows the Search Input parts which contains Text Filter, Sort by Date or Amount and Date Range filters.


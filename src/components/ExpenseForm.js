import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      description : props.expense ? props.expense.description : '',
      note : props.expense ? props.expense.note : '',
      amount : props.expense ? (props.expense.amount).toString() : '',
      createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
      error : ''
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;

    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(() => ({ amount }))};
};

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description || !this.state.amount){
      this.setState(() => ({ error : 'Please Provide Description and Amount'}));
    }
    else {
      this.setState(() => ({ error : ''}));
      this.props.onSubmit({
        description : this.state.description,
        amount : parseFloat(this.state.amount),
        createdAt : this.state.createdAt.valueOf(),
        note : this.state.note
      });
    }
  };

  render(){
    return (
      <div>
        {this.state.error}
        <form onSubmit = {this.onSubmit}>
          <input type = "text" placeholder = "Description" value = {this.state.description}
             onChange = {this.onDescriptionChange} autoFocus/>

          <input type = "text" placeholder = "Amount" value = {this.state.amount}
            onChange = {this.onAmountChange} />

            <DatePicker
              selected = {this.state.createdAt}
              onChange = {this.onDateChange}
              />
          <textarea placeholder = "Add a note for your expense (OPTIONAL)"
            value = {this.state.note} onChange = {this.onNoteChange}>
          </textarea>

          <button>Add Expense</button>
        </form>
      </div>
    );
  };
};

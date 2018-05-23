import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const now = moment();

export default class IncomeForm extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      description : props.income ? props.income.description : '',
      note : props.income ? props.income.note : '',
      amount : props.income ? (props.income.amount).toString() : '',
      createdAt : props.income ? moment(props.income.createdAt) : moment(),
      error : ''
    };
  }

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

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


  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description ){
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
      // console.log(this.state.description);
    }
  };

    render(){
      return (
          <form className = "form"  onSubmit = {this.onSubmit}>

            {this.state.error && <p className = "form__error">{this.state.error}</p>}

            <input type = "text" placeholder = "Income Source" value = {this.state.description}
              onChange = {this.onDescriptionChange} autoFocus className = "text-input"/>

            <input type = "text" placeholder = "Amount" value = {this.state.amount} className = "text-input"
              onChange = {this.onAmountChange} />

              <DatePicker  className = "date-picker"
                selected = {this.state.createdAt}
                onChange = {this.onDateChange}
                />
              <textarea className = "textarea" placeholder = "Add a note for your income (OPTIONAL)"
              value = {this.state.note}
               onChange = {this.onNoteChange}
               >
            </textarea>

            <div>
            <button className = "button">Save Income</button>
            </div>
          </form>
      );
    };
};

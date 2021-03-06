import React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, resetFilter } from '../action/filters';

class ExpenseListFilters extends React.Component {
  state = {};

  handleChangeStart = (startDate) => {
    this.props.dispatch(setStartDate(startDate));
  };

  handleChangeEnd = ( endDate ) => {
    this.props.dispatch(setEndDate(endDate));
  };

  render(){
    return (
      <div className= "content-container">
        <div className = "input-group">
          <div className = "input-group__item">
            <input className = "text-input"
              placeholder = "Search Keywords"
              type = "text" value = {this.props.filters.text} onChange = {(e) => {
                this.props.dispatch(setTextFilter(e.target.value))
              }}/>
          </div>
          <div className = "input-group__item">
            <select className = "select" value = {this.props.filters.sortBy} onChange = {(e) => {

                  if(e.target.value === 'date')
                  {
                     this.props.dispatch(sortByDate());
                  }
                  else if(e.target.value === 'amount')
                  {
                     this.props.dispatch(sortByAmount());
                  }
              }}>
              <option value = "date">Date</option>
              <option value = "amount">Amount</option>
            </select>
          </div>
          <div className = "input-group__item">
            <span>
            <DatePicker className = "date-picker"
            selected={this.props.filters.startDate}
            selectsStart
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onChange={this.handleChangeStart}
            />

            <DatePicker className = "date-picker"
            selected={this.props.filters.endDate}
            selectsEnd
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onChange={this.handleChangeEnd}
            />
            </span>
          </div>
          <div className = "input-group__item">
            <button className= "input-group__button" onClick = {(e) => {
              this.props.dispatch(setTextFilter(''));
              this.props.dispatch(sortByDate());
            }}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    filters : state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);

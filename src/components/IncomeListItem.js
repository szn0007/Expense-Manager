import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const IncomeListItem = ({ id, description, amount, createdAt }) => (
    <Link className = "list-item" to={`/edit-income/${id}`}>
      <div>
        <h3 className = "list-item__title">{description}</h3>
        <span className = "list-item__sub-title">
          {moment(createdAt).format('MMMM Do, YYYY')}
        </span>
      </div>

      <div className = "list-item__data">
          {numeral(amount).format('$0,0.00')}
      </div>
    </Link>
);

export default IncomeListItem;

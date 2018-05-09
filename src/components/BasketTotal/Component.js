import React from 'react';
import PropTypes from 'prop-types';
import './Component.css';
import formatCurrency from '../../formatCurrency';

const BasketTotal = ({ total }) => (
  <div className="app__basket-total">
    {formatCurrency(total)}
  </div>
);

BasketTotal.propTypes = {
  total: PropTypes.number.isRequired,
};

export default BasketTotal;

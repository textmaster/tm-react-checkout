import React from 'react';
import PropTypes from 'prop-types';
import { getProductName, getProductValue } from '../../config/products';
import formatCurrency from '../../formatCurrency';
import './Component.css';

const BasketItems = ({ products }) => (
  <div className="app__basket-items">
    <ul>
      { 
        products.map((productCode, idx) => (
          <li key={idx}>
            <span className="app__basket-items__name">{getProductName(productCode)}</span>
            <span className="app__basket-items__value">
              {formatCurrency(getProductValue(productCode))}
            </span>
          </li>
        ))
      }
    </ul>
  </div>
);

BasketItems.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BasketItems;

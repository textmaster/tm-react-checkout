import React from 'react';
import PropTypes from 'prop-types';
import { getProductCodes, getProductName } from '../../config/products';
import AddProductButton from './AddProductButton';
import './Component.css';

const ProductSelection = ({ addProduct }) => (
  <div className="app__product-selection">
    { 
      getProductCodes().map((productCode, idx) => (
        <AddProductButton
          key={idx}
          onClick={() => addProduct({ productCode })}
          title={getProductName(productCode)}
        />
      ))
    }
  </div>
);

ProductSelection.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default ProductSelection;

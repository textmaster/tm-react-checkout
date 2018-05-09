import React from 'react';
import PropTypes from 'prop-types';

const AddProductButton = ({ onClick, title }) => (
  <button onClick={(e) => {
    e.preventDefault();
    onClick();
  }}>
    {title}
  </button>
);

AddProductButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddProductButton;

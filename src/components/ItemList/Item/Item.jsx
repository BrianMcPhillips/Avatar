import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ 
  data: {
    _id,
    name,
    photoUrl
  }
}) => (
  <div>
    <img src={photoUrl} alt={name} />
    <h3>{name}</h3>
  </div>

);

Item.propTypes = {
  data: PropTypes.object.isRequired,
  _id: PropTypes.string,
  name: PropTypes.string,
  photoUrl: PropTypes.string
};

export default Item; 

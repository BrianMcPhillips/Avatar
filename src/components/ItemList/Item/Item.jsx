import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ 
  data: {
    _id,
    name,
    photoUrl
  }
}) => (
  <div>
    <Link to={`/detail/${_id}`}>
      <img src={photoUrl} alt={name} />
    </Link>
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

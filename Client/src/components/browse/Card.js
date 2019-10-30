import React from 'react';
// import PropTypes from 'prop-types';

const Card = props => {
  const { title, desc, link } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
      <span>
        <a href={link}>{link}</a>
      </span>
    </div>
  );
};

// Card.propTypes = {};

export default Card;

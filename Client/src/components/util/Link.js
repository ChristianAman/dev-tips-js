import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import Redirect from './Redirect';

const Link = props => {
  return /^https?:\/\//.test(props.to) ? (
    <a href={props.to} {...props}>
      {props.text}
    </a>
  ) : (
    <Redirect />
  );
};

export default Link;

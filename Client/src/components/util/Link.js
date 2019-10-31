import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Redirect from './Redirect';

const Link = props => {
  return /^https?:\/\//.test(props.to) ? <Redirect to={props.to} /> : <RouterLink to={props.to} />;
};

export default Link;

import React from 'react';

const Redirect = props => {
  const doRedirect = () => {
    window.location.replace('http://www.google.com');
  };

  return <button onClick={doRedirect}>kicka</button>;
};

export default Redirect;

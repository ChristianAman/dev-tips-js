import React from 'react';
import axios from 'axios';

const getData = async () => {
  const { data } = await axios('/test');
  console.log(data);
};

const Home = () => {
  getData();
  return <div>Home</div>;
};

export default Home;

import React, { useState, useEffect } from 'react';
import Card from './Card';

import axios from 'axios';

const Browse = () => {
  const [tips, setTips] = useState([]);

  const getData = async () => {
    const { data } = await axios('/tips');
    setTips([...data]);
  };

  useEffect(() => {
    const callServer = async () => {
      await getData();
    };

    callServer();
  }, []);

  return (
    <div className='Browse'>
      This is a Browse!
      {tips.map(x => {
        return <Card key={x._id} title={x.title} desc={x.desc} link={x.link} id={x.id} />;
      })}
    </div>
  );
};

export default Browse;

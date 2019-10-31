import React, { useState, useEffect } from 'react';
import Card from './Card';

import axios from 'axios';

const Browse = () => {
  const [tips, setTips] = useState([]);
  console.log('1');

  const getData = async () => {
    const { data } = await axios('/tips');
    console.log('in get data:', data);
    setTips([...data.tips]);
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
      {console.log('In return:', tips)}
      {tips.map(x => {
        console.log('hej', x);
        return <Card key={x.id} title={x.title} desc={x.desc} link={x.link} id={x.id} />;
      })}
    </div>
  );
};

export default Browse;

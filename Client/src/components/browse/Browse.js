import React from 'react';
import Card from './Card';

const mock = {
  tips: [
    {
      id: '123',
      title: 'Tip 1',
      desc:
        'Elit veniam reprehenderit enim veniam aliqua occaecat aute nostrud aliquip sit. Laborum culpa nisi dolore consequat nulla amet veniam mollit aliqua. Id aliquip id quis esse deserunt duis veniam. Aliquip et ad reprehenderit aliqua. Occaecat minim cillum voluptate do ut.',
      link: 'www.google.com',
    },
    {
      id: '1234',
      title: 'Tip 2',
      desc:
        'Elit veniam reprehenderit enim veniam aliqua occaecat aute nostrud aliquip sit. Laborum culpa nisi dolore consequat nulla amet veniam mollit aliqua. Id aliquip id quis esse deserunt duis veniam. Aliquip et ad reprehenderit aliqua. Occaecat minim cillum voluptate do ut.',
      link: 'www.google.com',
    },
    {
      id: '12345',
      title: 'Tip 3',
      desc:
        'Elit veniam reprehenderit enim veniam aliqua occaecat aute nostrud aliquip sit. Laborum culpa nisi dolore consequat nulla amet veniam mollit aliqua. Id aliquip id quis esse deserunt duis veniam. Aliquip et ad reprehenderit aliqua. Occaecat minim cillum voluptate do ut.',
      link: 'www.google.com',
    },
    {
      id: '123456',
      title: 'Tip 4',
      desc:
        'Elit veniam reprehenderit enim veniam aliqua occaecat aute nostrud aliquip sit. Laborum culpa nisi dolore consequat nulla amet veniam mollit aliqua. Id aliquip id quis esse deserunt duis veniam. Aliquip et ad reprehenderit aliqua. Occaecat minim cillum voluptate do ut.',
      link: 'www.google.com',
    },
  ],
};
// const renderTips = data => {
//   return data.map(x => <Card title={x.title} desc={x.desc} link={x.link} id={x.id} />);
// };
const Browse = () => {
  return (
    <div className='Browse'>
      This is a Browse!
      {console.log(mock)}
      {mock.tips.map(x => (
        <Card key={x.id} title={x.title} desc={x.desc} link={x.link} id={x.id} />
      ))}
      {/* {renderTips(mock.tips)} */}
    </div>
  );
};

export default Browse;

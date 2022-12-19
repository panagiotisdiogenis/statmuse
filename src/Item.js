import React from 'react';

const Item = ({ image }) => {

  const fileName = image.split('/').pop().split('.').shift();
  const title = fileName.replace(/-/g, ' ');
  const playerMap = {
    1: 'Jimmy Butler',
    2: 'Steph Curry',
    3: 'Kevin Durant',
    4: 'Giannis Antetokounmpo',
    5: 'Lebron James',
    6: 'Lonzo Ball',
    7: 'Luka Dončić',
    8: 'Chris Paul',
    9: 'Jayson Tatum'
  }

  return (
    <div class="container border-2 border-transparent hover:border-gray-100 rounded-md cursor-pointer">
      <img
        src={image}
        alt="T-Shirt"
        className="w-full h-64 object-cover p-4"
      />

      <p className="text-md text-center font-extrabold">{playerMap[title]}</p>
      <p className="text-md text-center font-extrabold pb-4">T-Shirt</p>
    </div>
  );
};

export default Item;


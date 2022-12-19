import React from 'react';

const Item = ({ image, title, onClick }) => {

  return (
    <div className="container cursor-pointer" onClick={() => onClick({ image, title })}>
      <img
        src={image}
        alt="T-Shirt"
        className="w-full h-64 object-cover p-4 transition duration-0 hover:duration-150 hover:scale-110"
      />
      <p className="text-md text-center font-extrabold">{title}</p>
      <p className="text-md text-center font-extrabold pb-4">T-Shirt</p>
    </div>
  );
};

export default Item;


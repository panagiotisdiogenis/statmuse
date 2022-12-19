import React from 'react';

const Breadcrumb = () => {
  return (
    <ol className="flex items-center list-none p-4 m-0">
      <li className="mr-4 text-black md:text-2xl text-xl font-bold">
        <a href="/">Shop</a>
      </li>
      <li className="slash text-gray-500 md:text-2xl text-xl font-bold pr-4">
        /
      </li>
      <li className="text-gray-500 md:text-2xl text-xl font-bold">
        NBA
      </li>
    </ol>
  );
};

export default Breadcrumb;

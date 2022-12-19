import React from 'react';

const ProductPage = ({ product, exitButton }) => {
  return (
    <div className="container mx-auto max-w-3xl p-4">
        <div className="text-center p-4">
            <button className="rounded-full h-10 w-10 bg-zinc-900 text-white font-bold rounded-full hover:scale-110 transition duration-0 hover:duration-150" onClick={exitButton}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mx-auto w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
            </button>
        </div>
        <img src={product.image} alt={product.title} className="w-full object-cover p-4" />
        <p className="text-xl text-center font-extrabold">{product.title}</p>
        <p className="text-xl text-center font-extrabold pb-4">T-Shirt</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
    </div>
  );
};

export default ProductPage;

import React from 'react';

const Card = ({ avatar, authorName, podcast, reason, benefit, favorite }) => {
  return (
    <div className='border rounded-lg shadow-md w-full bg-white hover:shadow-lg transition-shadow duration-300'>
      <img src={avatar} alt={authorName} className='w-full h-[400px] object-cover rounded-t-lg' />
      <div className='p-6 space-y-4 text-gray-800'>
        <h1 className='font-bold text-xl lg:text-2xl text-indigo-600'>Podcast Name: {podcast}</h1>
        <p className='text-gray-700'><span className='font-semibold'>Host:</span> {authorName}</p>
        <p className='text-gray-700'><span className='font-semibold'>Why I Love it:</span> {reason}</p>
        <p className='text-gray-700'><span className='font-semibold'>How it's helped me:</span> {benefit}</p>
        <p className='text-gray-700'><span className='font-semibold'>Favorite episode:</span> {favorite}</p>
      </div>
    </div>
  );
};

export default Card;
import React from 'react';

const MainCard = ({ title, size, date }) => {
  return (
    <div className="bg-white w-full hover:bg-blue-100 duration-200 rounded-lg shadow p-4 flex justify-between items-center">
      <div className='flex flex-col'>
      <h3 className="font-bold text-lg">{title}</h3>
        <span>{size}</span>
      </div>
      <span>{date}</span>
    </div>
  );
};

export default MainCard;
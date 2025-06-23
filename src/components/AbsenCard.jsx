import React from 'react';

const AbsenCard = ({ title, size, date }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between">
        <h3 className="font-bold">{title}</h3>
        <span className="text-gray-600">{size}</span>
      </div>
      <div className="text-right text-sm text-gray-600 mt-1">
        {date}
      </div>
    </div>
  );
};

export default AbsenCard;
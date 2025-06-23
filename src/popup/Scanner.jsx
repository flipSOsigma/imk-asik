import React, { useState } from 'react';
import { BiQrScan } from 'react-icons/bi';

const ScannerPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm bg-opacity-50 flex justify-center items-end z-30">
      <div className="bg-white p-6 rounded shadow-lg w-full flex flex-col items-center pb-20">
        <h2 className="text-xl font-bold mb-4">QR Code Scanner</h2>
        <div className="w-full aspect-square border-2 max-w-sm rounded-2xl flex justify-center items-center">
          <BiQrScan className="text-6xl mb-4 mx-auto" />
        </div>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ScannerPopup;

const App = () => {
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => setIsScannerOpen(true)}
      >
        Open Scanner
      </button>
      {isScannerOpen && <ScannerPopup onClose={() => setIsScannerOpen(false)} />}
    </div>
  );
};


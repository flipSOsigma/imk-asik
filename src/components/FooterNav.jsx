import { useState } from 'react';
import { BiGrid, BiQrScan, BiReceipt, BiSolidDashboard, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import ScannerPopup from '../popup/Scanner';

const FooterNav = () => {

  const [isScannerOpen, setIsScannerOpen] = useState(false);
  return (
    <footer className="bg-white shadow-lg p-4 fixed bottom-0 left-0 w-full z-50">
      <div className="flex justify-around max-w-md mx-auto">
        <Link to={'/'} className="text-black flex flex-col group justify-center items-center text-xs flex-1"><BiSolidDashboard className='group-hover:scale-150 group-hover:-translate-y-2.5 duration-300 group-hover:bg-blue-500 group-hover:p-1 group-hover:text-white rounded-full text-2xl' /> dashboard</Link>
        <Link to={'/report'} className="text-black flex flex-col group justify-center items-center text-xs flex-1"><BiReceipt className='group-hover:scale-150 group-hover:-translate-y-2.5 duration-300 group-hover:bg-blue-500 group-hover:p-1 group-hover:text-white rounded-full text-2xl' /> report</Link>
        <button onClick={() => setIsScannerOpen(true)} className="text-black flex flex-col group justify-center items-center text-xs flex-1"><BiQrScan className='group-hover:scale-150 group-hover:-translate-y-2.5 duration-300 group-hover:bg-blue-500 group-hover:p-1 group-hover:text-white rounded-full text-2xl' /> scan</button>
        <Link to={'/schedule'} className="text-black flex flex-col group justify-center items-center text-xs flex-1"><BiGrid className='group-hover:scale-150 group-hover:-translate-y-2.5 duration-300 group-hover:bg-blue-500 group-hover:p-1 group-hover:text-white rounded-full text-2xl' /> schedule</Link>
        <Link to={'/profile'} className="text-black flex flex-col group justify-center items-center text-xs flex-1"><BiUser className='group-hover:scale-150 group-hover:-translate-y-2.5 duration-300 group-hover:bg-blue-500 group-hover:p-1 group-hover:text-white rounded-full text-2xl' /> profile</Link>
      </div>
      {isScannerOpen && <ScannerPopup onClose={() => setIsScannerOpen(false)} />}
    </footer>
  );
};

export default FooterNav;
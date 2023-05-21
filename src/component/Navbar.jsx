import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleLogout }) => {
  return (
    <nav className="flex items-center justify-between bg-slate-500 p-4">
      <div className="text-white text-2xl font-bold">Dispatcher App</div>
      <div className="flex flex-grow justify-center space-x-4">
        <Link to="/crimereport" className="text-white font-bold">Report Crime</Link>
        <Link to="/viewreport" className="text-white font-bold">View Report</Link>
        <Link to="/map" className="text-white font-bold">View Map</Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;

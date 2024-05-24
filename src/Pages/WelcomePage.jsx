import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-400 text-white">
      <h1 className="text-5xl font-bold mb-8">Welcome to CovidConnect</h1>
      <p className="text-xl mb-4">Website Task</p>
      <div className="space-x-4">
        <Link to="/contacts">
          <button className="rounded-full shadow shadow-slate-700 font-bold bg-blue-400 p-3 text-2xl">
            View Contacts
          </button>
        </Link>
        <Link to="/dashboard">
          <button className="rounded-full shadow shadow-slate-700 font-bold bg-blue-400 p-3 text-2xl">
            Charts And Maps
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;

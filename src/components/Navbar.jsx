
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-3" />
              Shri Balaji Education Center
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg ${isActive('/') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            >
              Home
            </Link>
            {!isLoggedIn ? (
              <Link 
                to="/login" 
                className={`px-4 py-2 rounded-lg ${isActive('/login') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
              >
                Login
              </Link>
            ) : (
              <>
                <Link 
                  to="/dashboard" 
                  className={`px-4 py-2 rounded-lg ${isActive('/dashboard') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/tests" 
                  className={`px-4 py-2 rounded-lg ${isActive('/tests') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
                >
                  Tests
                </Link>
                <Link 
                  to="/results" 
                  className={`px-4 py-2 rounded-lg ${isActive('/results') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
                >
                  Results
                </Link>
                <Link 
                  to="/notes" 
                  className={`px-4 py-2 rounded-lg ${isActive('/notes') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
                >
                  Notes
                </Link>
                <Link 
                  to="/old-papers" 
                  className={`px-4 py-2 rounded-lg ${isActive('/old-papers') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
                >
                  Old Papers
                </Link>
                <button 
                  onClick={onLogout}
                  className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
                >
                  Logout
                </button>
              </>
            )}
          </div>
          
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <div className=' border-2 border-dashed rounded-xl '>
              <img src="../assets/image-Photoroom.png" alt="logo"  />
            </div>
            <div className="rounded-xl w-16 h-16 mr-3" />
            Shri Balaji Education Center
          </Link>

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
                <Link to="/dashboard" className={`px-4 py-2 rounded-lg ${isActive('/dashboard') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}>Dashboard</Link>
                <Link to="/tests" className={`px-4 py-2 rounded-lg ${isActive('/tests') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}>Tests</Link>
                <Link to="/results" className={`px-4 py-2 rounded-lg ${isActive('/results') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}>Results</Link>
                <Link to="/notes" className={`px-4 py-2 rounded-lg ${isActive('/notes') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}>Notes</Link>
                <Link to="/old-papers" className={`px-4 py-2 rounded-lg ${isActive('/old-papers') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}>Old Papers</Link>
                <button onClick={onLogout} className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg">Logout</button>
              </>
            )}
          </div>

          {/* Mobile toggle button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 pb-4">
            <Link to="/" className={`px-4 py-2 rounded-lg ${isActive('/') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`} onClick={toggleMobileMenu}>Home</Link>
            {!isLoggedIn ? (
              <Link to="/login" className={`px-4 py-2 rounded-lg ${isActive('/login') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`} onClick={toggleMobileMenu}>Login</Link>
            ) : (
              <>
                <Link to="/dashboard" className={`px-4 py-2 rounded-lg ${isActive('/dashboard') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`} onClick={toggleMobileMenu}>Dashboard</Link>
                <Link to="/tests" className={`px-4 py-2 rounded-lg ${isActive('/tests') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`} onClick={toggleMobileMenu}>Tests</Link>
                <Link to="/results" className={`px-4 py-2 rounded-lg ${isActive('/results') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`} onClick={toggleMobileMenu}>Results</Link>
                <Link to="/notes" className={`px-4 py-2 rounded-lg ${isActive('/notes') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`} onClick={toggleMobileMenu}>Notes</Link>
                <Link to="/old-papers" className={`px-4 py-2 rounded-lg ${isActive('/old-papers') ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`} onClick={toggleMobileMenu}>Old Papers</Link>
                <button onClick={() => { onLogout(); toggleMobileMenu(); }} className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg">Logout</button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

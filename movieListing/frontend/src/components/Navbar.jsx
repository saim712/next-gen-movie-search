




import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FilmIcon, HeartIcon, HomeIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar flex items-center justify-between px-8 py-4 bg-gray-950 shadow-lg shadow-black/30">
      <div className="navbar-brand flex items-center gap-2 text-2xl font-bold text-amber-400">
        <FilmIcon className="w-8 h-8 animate-pulse" />
        MovieApp
      </div>
      <div className="navbar-links flex gap-6">
        <Link
          to="/"
          className={`navbar-link flex items-center gap-1 px-3 py-2 rounded-lg transition-colors duration-200
            ${location.pathname === '/' 
              ? 'bg-amber-400 text-gray-900 shadow-md' 
              : 'text-amber-400 hover:bg-gray-800 hover:text-amber-300'}
          `}
        >
          <HomeIcon className="w-5 h-5" />
          Home
        </Link>
        <Link
          to="/favorite"
          className={`navbar-link flex items-center gap-1 px-3 py-2 rounded-lg transition-colors duration-200
            ${location.pathname === '/favorite' 
              ? 'bg-amber-400 text-gray-900 shadow-md' 
              : 'text-amber-400 hover:bg-gray-800 hover:text-amber-300'}
          `}
        >
          <HeartIcon className="w-5 h-5" />
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
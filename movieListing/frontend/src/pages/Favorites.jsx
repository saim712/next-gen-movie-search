import React from 'react'
import { FaceFrownIcon, SparklesIcon } from '@heroicons/react/24/solid'
import { useMovieContext } from '../contexts/movieContext'
import MovieCard from '../components/MovieCard'

const Favorites = () => {
  const { favorities } = useMovieContext();

  if (favorities.length === 0) {
    return (
      <div className="favorite flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl animate-fade-in">
        <div className="relative mb-6">
          <FaceFrownIcon className="w-24 h-24 text-amber-400 animate-bounce drop-shadow-lg" />
          <SparklesIcon className="w-10 h-10 text-indigo-400 absolute -top-4 -right-6 animate-spin-slow" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-300 text-center mb-4 drop-shadow-lg tracking-tight">
          Nothing to show here... <br />
          <span className="text-amber-400 animate-pulse">but not for too long!</span>
        </h1>
        <p className="text-gray-400 text-lg text-center max-w-md">
          Add movies to your favorites and they’ll appear here with a little sparkle ✨
        </p>
        <style>
          {`
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(40px);}
              to { opacity: 1; transform: translateY(0);}
            }
            .animate-fade-in {
              animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
            }
            .animate-spin-slow {
              animation: spin 3s linear infinite;
            }
          `}
        </style>
      </div>
    )
  }

  return (
    <div className="favorite max-w-7xl mx-auto py-8 px-4 min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400 text-center mb-8 drop-shadow-lg tracking-tight">
        Your Favorite Movies
      </h1>
      <div className="movies-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favorities.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default Favorites
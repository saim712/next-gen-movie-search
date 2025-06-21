
// import React from 'react'
// import { HeartIcon } from '@heroicons/react/24/solid';
// import { useMovieContext } from '../contexts/movieContext';

// const MovieCard = ({ movie }) => {
//   const { isFavorite, addToFavrities, removeFromFavorites } = useMovieContext();
//   const favorite = isFavorite(movie.id);

//   const handleFavoriteClick = () => {
//     if (favorite) {
//       removeFromFavorites(movie.id);
//     } else {
//       addToFavrities(movie);
//     }
//   };

//   return (
//     <div className="movie-card bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group relative">
//       <div className="movie-poster relative">
//         <img
//           src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
//           alt={movie.title}
//           className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
//         />
//         <button
//           className={`absolute top-3 right-3 rounded-full p-2 shadow-lg transition-all duration-300 border-2
//   ${favorite 
//     ? 'bg-amber-400 text-white border-amber-400 animate-pulse ring-2 ring-amber-300 scale-110'
//     : 'bg-gray-900/80 text-amber-400 border-indigo-700 hover:bg-amber-400 hover:text-white hover:scale-110 hover:shadow-amber-400/50'}
// `}
//           onClick={handleFavoriteClick}
//           aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
//         >
//         <HeartIcon 
//   className={`w-7 h-7 transition-all duration-300 drop-shadow-lg
//     ${favorite 
//       ? 'fill-amber-500 text-white animate-heart-beat scale-110'
//       : 'fill-none stroke-2 text-amber-400 group-hover:scale-125 group-hover:text-amber-300'}
//   `}
// />
//         </button>
//         <style>
//           {`
//             @keyframes heart-beat {
//               0%, 100% { transform: scale(1);}
//               20% { transform: scale(1.2);}
//               40% { transform: scale(0.95);}
//               60% { transform: scale(1.1);}
//               80% { transform: scale(0.98);}
//             }
//             .animate-heart-beat {
//               animation: heart-beat 0.8s cubic-bezier(.4,0,.2,1) infinite;
//             }
//           `}
//         </style>
//       </div>
//       <div className="movie-info p-4">
//         <h3 className="text-xl font-bold mb-1 text-white">{movie.title}</h3>
//         <p className="text-gray-400">{movie.releasedate}</p>
//       </div>
//     </div>
//   )
// }

// export default MovieCard











import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid';
import { useMovieContext } from '../contexts/movieContext';

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavrities, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavrities(movie);
    }
  };

  return (
    <div className="movie-card bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group relative">
      <div className="movie-poster relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
          className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
        />
        <button
          className={`absolute top-3 right-3 rounded-full p-2.5 shadow-xl transition-all duration-300 border-2 backdrop-blur-sm
  ${favorite 
    ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white border-red-400 animate-pulse ring-4 ring-pink-300/50 scale-110 shadow-pink-500/30' 
    : 'bg-gray-900/70 text-gray-300 border-gray-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 hover:text-white hover:scale-110 hover:shadow-pink-500/40 hover:border-pink-400 hover:ring-2 hover:ring-pink-300/30'} `}
          onClick={handleFavoriteClick}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
        <HeartIcon 
  className={`w-6 h-6 transition-all duration-300 drop-shadow-lg
    ${favorite 
      ? 'text-white animate-heart-beat scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' 
      : 'text-gray-300 group-hover:text-white group-hover:scale-125 group-hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]'}
  `} />
        </button>
        <style>
          {`
            @keyframes heart-beat {
              0%, 100% { transform: scale(1); }
              15% { transform: scale(1.25); }
              30% { transform: scale(1.05); }
              45% { transform: scale(1.15); }
              60% { transform: scale(1.02); }
              75% { transform: scale(1.08); }
            }
            .animate-heart-beat {
              animation: heart-beat 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
            }
            
            @keyframes glow-pulse {
              0%, 100% { box-shadow: 0 0 15px rgba(236,72,153,0.3); }
              50% { box-shadow: 0 0 25px rgba(236,72,153,0.6); }
            }
            
            button:hover {
              animation: glow-pulse 2s ease-in-out infinite;
            }
          `}
        </style>
      </div>
      <div className="movie-info p-4">
        <h3 className="text-xl font-bold mb-1 text-white">{movie.title}</h3>
        <p className="text-gray-400">{movie.releasedate}</p>
      </div>
    </div>
  )
}

export default MovieCard
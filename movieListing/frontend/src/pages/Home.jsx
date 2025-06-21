// import React,{useState} from "react";
// import MovieCard from "../components/MovieCard";

// const Home = () => {
//     // array named movies of 5 movies data 
//     const movies = [
//         { id:1,title: 'Inception', releasedate: '2010-07-16', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80' },
//         { id:2,title: 'The Dark Knight', releasedate: '2008-07-18', url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
//         {id:3, title: 'Interstellar', releasedate: '2014-11-07', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80' },
//         {id:4, title: 'The Matrix', releasedate: '1999-03-31', url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
//         { id:5,title: 'Avatar', releasedate: '2009-12-18', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80' }
//     ];

//     const [searchTerm, setSearchTerm] = useState("");
//     // always use const else we can directly assign the value of searchTerm
//     //which causes an error then we can not need setsearchterm which rerender the omcopnent
//     // searchTerm=25;
//     // console.log(searchTerm)

//     const handleInput=(e)=>{
//         e.preventDefault();//it stops the browser from refreshing after form submission
//         console.log(searchTerm);
//     }
//   return (
//     <>
//       <div className="home">
//         <form  onClick={handleInput} className="search-form">
//             <input
//              type="text" placeholder="Search for a movie..." 
//              className="search-input"
//              value={searchTerm}
//              onChange={(e)=>setSearchTerm(e.target.value)}
//              />
//             <button type="submit" className="search-button">Search</button>
//         </form>
//             <div className="movies-grid">
//                 {
//                     movies.map((movie)=>(
//                         movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//                         &&
//                         <MovieCard movie={movie} key={movie.id} />
//                     ))
//                 }
//             </div>
//       </div>
//     </>
//   );
// };

// export default Home;





import React, { useState,useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import {fetchPopularMovies,searchMovie} from "../services/api"; // Assuming you have an API service to fetch movies

const Home = () => {
  // const movies = [
  //   { id: 1, title: 'Inception', releasedate: '2010-07-16', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80' },
  //   { id: 2, title: 'The Dark Knight', releasedate: '2008-07-18', url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  //   { id: 3, title: 'Interstellar', releasedate: '2014-11-07', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80' },
  //   { id: 4, title: 'The Matrix', releasedate: '1999-03-31', url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  //   { id: 5, title: 'Avatar', releasedate: '2009-12-18', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80' }
  // ];

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadingPopularMovies=async()=>{
      try{
        const popularMovies=await fetchPopularMovies();
        setMovies(popularMovies);
        setLoading(false);  
      }catch(error){
        setError("Failed to fetch movies");
        setLoading(false);
        setError(error.message);
      }
      finally{
        setLoading(false);
      }
    }

    loadingPopularMovies();
  }, [])
  


  const handleInput = (e) => {
    e.preventDefault();
    const handleSearch = async () => {
      setLoading(true);
      try {
        const searchResults = await searchMovie(searchTerm);
        setMovies(searchResults);
      } catch (error) {
        setError("Failed to fetch search results");
      } finally {
        setLoading(false);
      }
    };
  };

  return (
    <div className="home max-w-7xl mx-auto py-8 px-4">
      <form onSubmit={handleInput} className="search-form flex items-center gap-2 mb-8">
        <div className="relative w-full max-w-md">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for a movie..."
            className="search-input w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="search-button flex items-center gap-1 px-4 py-2 bg-amber-400 text-gray-900 rounded-lg font-semibold hover:bg-amber-500 transition"
        >
          Search
        </button>
      </form>

      

      {loading && <Loading />}
      <div className="movies-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies
          .filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
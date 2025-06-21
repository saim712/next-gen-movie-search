// import React from 'react';
// import MovieCard from './components/MovieCard';
// import Home from './pages/Home';
// import Favorites from './pages/Favorites';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';


// const App = () => {
//   let condrender=0;
//   return (
//     <>
//     <Navbar />
//      <main className="main-content">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="favorite" element={<Favorites/>} />
//       </Routes>
//      </main>
//     </>
//   )
// }

// export default App





import React from 'react';
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { MovieProvider } from './contexts/movieContext';

const App = () => {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white transition-colors duration-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favorite" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
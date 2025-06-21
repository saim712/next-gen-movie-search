import { useState, useEffect, createContext, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorities, setFavorities] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorities')) || [];
        setFavorities(storedFavorites);
    }, []);

    useEffect(() => {
        localStorage.setItem('favorities', JSON.stringify(favorities));
    }, [favorities]);

    const addToFavrities = (movie) => {
        if (!favorities.some(fav => fav.id === movie.id)) {
            setFavorities(prev => [...prev, movie]);
        }
    };

    const removeFromFavorites = (movieId) => {
        setFavorities(prev => prev.filter(movie => movie.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorities.some(movie => movie.id === movieId);
    };

    return (
        <MovieContext.Provider value={{ favorities, addToFavrities, removeFromFavorites, isFavorite }}>
            {children}
        </MovieContext.Provider>
    );
};
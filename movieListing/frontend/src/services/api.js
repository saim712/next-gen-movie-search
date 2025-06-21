const API_KEY=import.meta.env.VITE_API_KEY;
const BASE_URL="https://api.themoviedb.org/3";

export const fetchPopularMovies=async()=>{
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    if(!response.ok){
        throw new Error("Failed to fetch popular movies");
    }
    const data=await response.json();
    return data.results;
} 

export const searchMovie=async(query)=>{
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`);
    if(!response.ok){
        throw new Error("Failed to search for movies");
    }
    const data=await response.json();
    return data.results;
}
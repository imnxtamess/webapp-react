import { createContext, useContext, useState, useEffect } from "react";

const MoviesContext = createContext();

//fetch hook
function useFetchMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  return movies;
}

// provider
function MoviesProvider({ children }) {
  const movies = useFetchMovies();

  return (
    <MoviesContext.Provider value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  );
}

// custom context hook
function useMovieContext() {
  return useContext(MoviesContext);
}

//export

export { MoviesProvider, useMovieContext };

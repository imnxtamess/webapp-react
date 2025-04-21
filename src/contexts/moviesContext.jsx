import { createContext, useContext, useState, useEffect } from "react";
import GlobalContext from "./globalContext";

const MoviesContext = createContext();

//fetch hook
function useFetchMovies() {
  const [movies, setMovies] = useState([]);
  const { setIsLoading } = useContext(GlobalContext);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
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

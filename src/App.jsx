import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { useState } from "react";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { MoviesProvider } from "./contexts/moviesContext";
import GlobalContext from "./contexts/globalContext";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <MoviesProvider>
          <BrowserRouter>
            <Routes>
              <Route Component={DefaultLayout}>
                <Route path="/" Component={Home} />
                <Route path="/movie/:id" element={<MovieDetails />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MoviesProvider>
      </GlobalContext.Provider>
    </>
  );
}

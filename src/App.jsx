import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { MoviesProvider } from "./context/moviesContext";
export default function App() {
  return (
    <>
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
    </>
  );
}

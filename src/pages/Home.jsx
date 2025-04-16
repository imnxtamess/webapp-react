import { Link } from "react-router";
import { useMovieContext } from "../context/moviesContext";
export default function () {
  const { movies } = useMovieContext();

  return (
    <>
      <main>
        <div className="container">
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
            {movies?.map((movie) => (
              <div className="col" key={movie.id}>
                <Link to={`/movie/${movie.id}`} className="card h-100">
                  <img
                    src={`http://localhost:3000/images/${movie.image}`}
                    alt=""
                    className="card-img-top h-100"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

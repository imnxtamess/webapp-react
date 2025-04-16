import { useState, useEffect } from "react";

export default function () {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  return (
    <>
      <main>
        <div className="container">
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
            {movies.map((movie) => (
              <div className="col" key={movie.id}>
                <div className="card h-100">
                  <img
                    src={`http://localhost:3000/images/${movie.image}`}
                    alt=""
                    className="card-img-top h-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

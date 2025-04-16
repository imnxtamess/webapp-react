import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMovieContext } from "../context/moviesContext";

export default function MovieDetails() {
  const { movies } = useMovieContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      });
  }, [id]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  function handleNext() {
    navigate(`/movie/${parseInt(id) + 1}`);
  }

  function handlePrevious() {
    if (parseInt(id) > 1) {
      navigate(`/movie/${parseInt(id) - 1}`);
    }
  }

  function starScore(vote) {
    const stars = [];
    const emptyStars = [];

    for (let i = 0; i < vote; i++) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    for (let i = 0; i < 5 - vote; i++) {
      emptyStars.push(<i key={i} className="bi bi-star"></i>);
    }
    return [...stars, emptyStars];
  }

  return (
    <div className="container">
      <div className="detailsContainer d-flex gap-3">
        <div>
          <h1>{movieDetails.title}</h1>
          <img
            src={`http://localhost:3000/images/${movieDetails.image}`}
            alt={movieDetails.title}
          />
        </div>
        <div className="details ">
          <div className="d-flex gap-2">
            <strong>Director:</strong>
            <p>{movieDetails.director}</p>
          </div>
          <div className="d-flex gap-2">
            <strong>Genre:</strong>
            <p>{movieDetails.genre}</p>
          </div>
          <div className="d-flex gap-2">
            <strong>Release year:</strong>
            <p>{movieDetails.release_year}</p>
          </div>
          <div className="d-flex gap-2">
            <strong>Abstract:</strong>
            <p>{movieDetails.abstract}</p>
          </div>
        </div>
      </div>
      <div className="reviewsContainer mt-3">
        <h3>Reviews</h3>
        {movieDetails.reviews.map((review) => (
          <div
            key={review.id}
            className="reviewWrapper d-flex flex-column gap-2 "
          >
            <div className="d-flex justify-content-between">
              <div>
                <strong>User:</strong> <span>{review.name}</span>
              </div>
              <div>
                <strong>Posted at:</strong> <span>{review.created_at}</span>
              </div>
            </div>
            <hr />
            <div>{starScore(review.vote)}</div>
            <div>
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-secondary"
          onClick={handlePrevious}
          disabled={parseInt(id) <= 1}
        >
          Previous
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleNext}
          disabled={parseInt(id) === movies.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

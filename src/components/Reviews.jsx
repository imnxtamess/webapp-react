export default function Reviews({ reviewList }) {
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
    <div className="reviewsContainer mt-3">
      <h3>Reviews</h3>
      {reviewList.length > 0 ? (
        reviewList.map((review) => (
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
        ))
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function PostReview() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    movie_id: "",
    name: "",
    vote: Number(""),
    text: "",
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      movie_id: id,
    }));
  }, [id]);

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/movies", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        if (err) {
          console.log(err.message);
        }
      });
  }
  return (
    <>
      <h1 className="mt-3 text-white">Post a review</h1>
      <form className=" text-white" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="d-flex gap-3 my-3 align-items-center">
          <input
            type="text"
            name="name"
            placeholder="Insert your name here.."
            onChange={(e) => handleInputChange(e)}
          />

          <div>
            <span>Select a score for the review: </span>
            <select
              onChange={(e) => handleInputChange(e)}
              name="vote"
              id="vote"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <textarea
          onChange={(e) => handleInputChange(e)}
          name="text"
          id="text"
        ></textarea>
        <button className="mt-2 btn btn-secondary" type="submit">
          Post
        </button>
      </form>
    </>
  );
}

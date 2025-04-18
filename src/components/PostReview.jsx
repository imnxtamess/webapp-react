import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AlertBanner from "./AlertBanner";
export default function PostReview() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    movie_id: "",
    name: "",
    vote: 5,
    text: "",
  });

  const [isValid, setIsValid] = useState(true);

  const [isNameValid, setIsNameValid] = useState(true);

  const [isTextValid, setisTextValid] = useState(true);

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

    if (formData.name.length < 2) {
      setIsNameValid(false);
      setIsValid(false);
    }

    if (formData.text.length < 3) {
      setisTextValid(false);
      setIsValid(false);
    }

    if (!isValid) return;
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
              defaultValue={5}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
        <textarea
          onChange={(e) => handleInputChange(e)}
          name="text"
          id="text"
        ></textarea>
        <div className="d-flex align-items-center gap-3 mt-2">
          <button className="btn btn-secondary" type="submit">
            Post
          </button>
          {!isValid ? (
            <AlertBanner text={isTextValid} name={isNameValid} />
          ) : null}
        </div>
      </form>
    </>
  );
}

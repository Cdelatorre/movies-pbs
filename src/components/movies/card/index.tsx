import React, { useCallback, useEffect, useState } from "react";
import { getRandomImage } from "../../../services/ImageService";
import GenreTab from "../genre-tab/index.tsx";
import "./index.scss";

const MovieCard = () => {
  const [img, setImg] = useState("");
  const [viewed, setViewed] = useState(false);
  const fetchImage = useCallback(() => getRandomImage(), []);

  useEffect(() => {
    fetchImage()
      .then((res) => setImg(res.url))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="movie-card card border-dark">
      <div className="card-img-top-container">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="card-img-custom"
        />
        <div className="action-card-btn bg-dark viewed text-primary">
          <i className={`far fa-eye${!viewed ? "-slash" : ""}`}></i>
        </div>
        <div className="action-card-btn bg-dark delete text-danger">
          <i className="far fa-trash-alt"></i>
        </div>
        <div className="action-card-btn bg-dark edit text-secondary">
          <i className="far fa-edit"></i>
        </div>
      </div>
      <div className="card-body bg-dark text-light pt-4">
        <h5 className="card-title text-start">Card title</h5>
        <p className="card-description text-start">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="genres d-flex">
          {[1, 1, 1, 1].map((el, i) => {
            return <GenreTab key={i}>genre</GenreTab>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleViewed,
  deleteMovie,
} from "../../../store/reducers/moviesReducer.ts";
import GenreTab from "../genre-tab/index.tsx";
import "./index.scss";

const MovieCard = (movie: Movie): JSX.Element => {
  const dispatch = useDispatch();
  const { viewed, id, img, title, genres } = movie;

  return (
    <div id={id} className="movie-card card border-dark">
      <div className="card-img-top-container">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="card-img-custom"
        />
        <div
          onClick={() => dispatch(toggleViewed(movie))}
          className="action-card-btn bg-dark viewed text-primary"
        >
          <i className={`far fa-eye${!viewed ? "-slash text-warning" : ""}`} />
        </div>
        <div
          onClick={() => dispatch(deleteMovie(movie))}
          className="action-card-btn bg-dark delete text-danger"
        >
          <i className="far fa-trash-alt"></i>
        </div>
        <div className="action-card-btn bg-dark edit text-secondary">
          <i className="far fa-edit"></i>
        </div>
      </div>
      <div className="card-body bg-dark text-light pt-4">
        <h5 className="card-title text-start">{title}</h5>
        <p className="card-description text-start">
          Some quick example text to build on the card title and make up thebulk
          of the card's content.
        </p>
        <div className="genres d-flex">
          {genres.map((gen) => (
            <GenreTab key={gen}>{gen}</GenreTab>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

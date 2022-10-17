import { useDispatch } from "react-redux";
import c from "classnames";
import {
  toggleViewed,
  deleteMovie,
  updateMovie,
} from "../../../store/reducers/moviesReducer";
import { setLoading } from "../../../store/reducers/loadingReducer";
import GenreTab from "../genre-tab";
import "./index.scss";
import { useState } from "react";
import Input from "../../misc/input";

const MovieCard = (movie: Movie): JSX.Element => {
  const { viewed, id, img, title, genres } = movie;

  const [edit, toggleEdit] = useState(false);
  const [editedTitle, setEditedTitle] = useState(movie.title);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteMovie(movie));
    dispatch(setLoading(true));
  };
  const classNames = c(
    "movie-card",
    "card",
    "border-2",
    viewed ? "border-primary viewed-card" : "border-dark unViewed-card"
  );

  const onToggleEdit = () => {
    if (edit) dispatch(updateMovie({ movie, editedTitle }));
    toggleEdit(!edit);
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setEditedTitle(value);
  };

  return (
    <div data-testid={`movie-card-${id}`} id={id} className={classNames}>
      <div className="card-img-top-container">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="card-img-custom"
        />
        <div
          data-testid={`toggle-viewed-btn-${id}`}
          onClick={() => dispatch(toggleViewed(movie))}
          className="action-card-btn bg-dark viewed text-primary"
        >
          <i className={`far fa-eye${!viewed ? "-slash text-warning" : ""}`} />
        </div>
        <div
          data-testid={`delete-movie-btn-${id}`}
          onClick={handleDelete}
          className="action-card-btn bg-dark delete text-danger"
        >
          <i className="far fa-trash-alt"></i>
        </div>
        <div
          data-testid={`edit-movie-btn-${id}`}
          onClick={onToggleEdit}
          className="action-card-btn bg-dark edit text-secondary"
        >
          {edit ? (
            <i className="fas fa-check-circle text-success-light edit-icon"></i>
          ) : (
            <i className="far fa-edit"></i>
          )}
        </div>
      </div>
      <div className="card-body bg-dark text-light pt-4">
        {!edit ? (
          <h3 className="card-title text-start mt-2">{title}</h3>
        ) : (
          <Input
            label="Editing title"
            name="editedTitle"
            type="text"
            value={editedTitle}
            onChange={handleOnChange}
          />
        )}
        <p className="card-description text-start">
          Some quick example text to build on the card title and make up thebulk
          of the card's content.
        </p>
        <div className="genres d-flex">
          {genres.map((gen) => (
            <GenreTab id={gen} key={gen}>
              {gen}
            </GenreTab>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

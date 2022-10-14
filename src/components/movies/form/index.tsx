import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useKeyPress from "../../../hooks/useKeypress.ts";
import { setLoading } from "../../../store/reducers/loadingReducer.ts";
import { addMovie } from "../../../store/reducers/moviesReducer.ts";
import Button from "../../misc/button/index.tsx";
import Input from "../../misc/input/index.tsx";
import GenreTab from "../genre-tab/index.tsx";
import { v4 as uuidv4 } from "uuid";
import {
  DEFAULT_FORM,
  ERRORS,
  IMG_URL,
  INTRO_KEYCODE,
} from "../../../constants";
import "./index.scss";

const MovieForm = () => {
  const [formState, setForm] = useState<FormValues>(DEFAULT_FORM);
  const [errors, setErrors] = useState<FormErrors>(ERRORS);
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useKeyPress((key: number): void => {
    const { currentGenre, genres } = formState;

    const genreAlreadyIncluded = (): boolean => {
      return genres.some((g) => {
        return (
          g.trim().toLocaleLowerCase() === currentGenre.trim().toLowerCase()
        );
      });
    };

    if (
      currentGenre.trim() &&
      document.activeElement === ref.current &&
      key === INTRO_KEYCODE
    ) {
      if (genreAlreadyIncluded()) {
        setForm({
          ...formState,
          currentGenre: "",
        });
      } else {
        setForm((prev) => ({
          ...formState,
          genres: [...genres, prev.currentGenre.trim()],
          currentGenre: "",
        }));
      }

      if (errors.genres) setErrors({ ...errors, genres: false });
    }
  });

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const { title, genres } = formState;

    if (title && genres.length) {
      dispatch(
        addMovie({
          id: uuidv4(),
          title,
          genres,
          viewed: false,
          img: `${IMG_URL}${Math.floor(Math.random() * 200 + 1)}/300/400`,
        })
      );
      dispatch(setLoading(true));
      setForm(DEFAULT_FORM);
    } else {
      setErrors({
        title: !title && "You must provide a title",
        genres: !genres.length && "You must include at least one gender",
      });
    }
  };

  const handleDeleteGenre = (genre: string) => {
    setForm({
      ...formState,
      genres: [...formState.genres.filter((g) => g !== genre)],
    });
  };

  const handleOnChange = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm({ ...formState, [name]: value });
  };

  return (
    <div className="movie-form-container mt-3">
      <h2 className="movie-form-title mt-0">Create your movie</h2>
      <form className="movie-form">
        <Input
          onFocus={() => setErrors({ ...errors, title: false })}
          onChange={handleOnChange}
          error={errors.title}
          label="Title"
          placeholder="Write down a title for your movie"
          value={formState.title}
          id="title-input"
          name="title"
        />
        <div className="genders d-flex mb-3 mt-3">
          {formState.genres.map((genre) => {
            return (
              <GenreTab id={genre} onDelete={handleDeleteGenre} key={genre}>
                {genre}
              </GenreTab>
            );
          })}
        </div>
        <Input
          onFocus={() => setErrors({ ...errors, genres: false })}
          onChange={handleOnChange}
          error={errors.genres}
          ref={ref}
          label="Genres"
          placeholder="Write down some movie genres"
          value={formState.currentGenre}
          id="title-input"
          name="currentGenre"
        />
      </form>
      <div className="mt-4">
        <Button
          extraClassNames="w-100 mt-3"
          action={handleSubmit}
          btnType="success"
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default MovieForm;

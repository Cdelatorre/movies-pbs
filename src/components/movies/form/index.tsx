import React, { useRef } from "react";
import { useState } from "react";
import useKeyPress from "../../../hooks/useKeypress.ts";
import Button from "../../misc/button/index.tsx";
import Input from "../../misc/input/index.tsx";
import GenreTab from "../genre-tab/index.tsx";
import "./index.scss";

const DEFAULT_FORM = {
  title: "",
  currentGenre: "",
  genres: [],
};

const ERRORS = {
  title: false,
  genres: false,
};

const INTRO_KEYCODE = 13;

const MovieForm = () => {
  const [formState, setFormState] = useState<FormValues>(DEFAULT_FORM);
  const [errors, setErrors] = useState<FormErrors>(ERRORS);
  const ref = useRef<HTMLInputElement>(null);

  useKeyPress((key: number) => {
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
        setFormState({
          ...formState,
          currentGenre: "",
        });
      } else {
        setFormState((prevState) => ({
          ...formState,
          genres: [...genres, prevState.currentGenre.trim()],
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
      console.log("submit");
    } else {
      setErrors({
        title: !title && "You must provide a title",
        genres: !genres.length && "You must include at least one gender",
      });
    }
  };

  const handleDeleteGenre = (genre: string) => {
    setFormState({
      ...formState,
      genres: [...formState.genres.filter((g) => g !== genre)],
    });
  };

  const handleOnChange = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="movie-form-container">
      <h3 className="movie-form-title">Create a movie</h3>
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

        <div className="genders d-flex mb-2 mt-2">
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
          placeholder="Write down some genres for your movie"
          value={formState.currentGenre}
          id="title-input"
          name="currentGenre"
        />
      </form>
      <div className="d-grid mt-4">
        <Button action={handleSubmit} btnType="success">
          Create
        </Button>
      </div>
    </div>
  );
};

export default MovieForm;

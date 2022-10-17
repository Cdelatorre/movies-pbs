import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MoviesState {
  viewedMovies: Movie[];
  unViewedMovies: Movie[];
}

const initialState: MoviesState = {
  viewedMovies: [],
  unViewedMovies: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      console.log("ENTROO");
      const newMovie = {
        ...action.payload,
        createdAt: new Date(),
      };
      state.unViewedMovies.push(newMovie);
    },
    deleteMovie: (state, action: PayloadAction<Movie>) => {
      const mov = action.payload;
      if (!mov.viewed) {
        state.unViewedMovies = state.unViewedMovies.filter(
          (m) => mov.id !== m.id
        );
      } else {
        state.viewedMovies = state.viewedMovies.filter((m) => mov.id !== m.id);
      }
    },
    updateMovie: (
      state,
      action: { payload: { movie: Movie; editedTitle: string } }
    ) => {
      const { movie, editedTitle } = action.payload;

      if (!movie.viewed) {
        state.unViewedMovies = state.unViewedMovies.map((m) => {
          if (movie.id === m.id) return { ...m, title: editedTitle };
          return m;
        });
      } else {
        state.viewedMovies = state.viewedMovies.map((m) => {
          if (movie.id === m.id) return { ...m, title: editedTitle };
          return m;
        });
      }
    },
    toggleViewed: (state, action: PayloadAction<Movie>) => {
      const mov = action.payload;

      if (!mov.viewed) {
        state.unViewedMovies = state.unViewedMovies.filter(
          (m) => m.id !== mov.id
        );
        state.viewedMovies.push({ ...mov, viewed: true });
      } else {
        state.viewedMovies = state.viewedMovies.filter((m) => m.id !== mov.id);
        state.unViewedMovies.push({ ...mov, viewed: false });
        state.unViewedMovies.sort(
          (a: any, b: any) =>
            new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
        );
      }
    },
  },
});

export const { addMovie, toggleViewed, deleteMovie, updateMovie } =
  movieSlice.actions;
export default movieSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MoviesState {
  viewedMovies: Movie[];
  unViewedMovies: Movie[];
  search: string;
}

const initialState: MoviesState = {
  viewedMovies: [],
  search: "",
  unViewedMovies: [
    {
      id: "f4dba054-5e14-44b4-a6c7-91032027c9c9",
      title: "1",
      genres: ["Horror"],
      viewed: false,
      img: "https://picsum.photos/id/195/300/400",
      createdAt: "2022-10-13T18:31:51.448Z",
    },
    {
      id: "1f48f992-f5a5-47fe-ab72-1872098e0df4",
      title: "2",
      genres: ["Horror"],
      viewed: false,
      img: "https://picsum.photos/id/81/300/400",
      createdAt: "2022-10-13T18:31:54.230Z",
    },
    {
      id: "80b2260e-831e-414b-a386-d8162a73e30e",
      title: "3",
      genres: ["Horror", "Comedy"],
      viewed: false,
      img: "https://picsum.photos/id/148/300/400",
      createdAt: "2022-10-13T18:31:59.550Z",
    },
    {
      id: "8e03d893-f606-42a4-8157-5b7f226529b8",
      title: "4",
      genres: ["Horror", "Comedy"],
      viewed: false,
      img: "https://picsum.photos/id/173/300/400",
      createdAt: "2022-10-13T18:32:02.351Z",
    },
    {
      id: "3fc78463-7e07-4fe7-9991-ffbe759cc474",
      title: "5",
      genres: ["Comedy"],
      viewed: false,
      img: "https://picsum.photos/id/174/300/400",
      createdAt: "2022-10-13T18:32:07.534Z",
    },
    {
      id: "a1572a41-34c2-46a6-acbd-5d269c816796",
      title: "6",
      genres: ["Comedy", "Romance"],
      viewed: false,
      img: "https://picsum.photos/id/64/300/400",
      createdAt: "2022-10-13T18:32:18.973Z",
    },
    {
      id: "f917b6cd-65ea-4197-96a9-132a3c8cecb1",
      title: "7",
      genres: ["Comedy", "Romance", "Horror"],
      viewed: false,
      img: "https://picsum.photos/id/122/300/400",
      createdAt: "2022-10-13T18:32:21.827Z",
    },
    {
      id: "386caf7b-5cd8-4457-a04e-b6b265ace2f6",
      title: "8",
      genres: ["Comedy", "Romance", "Horror"],
      viewed: false,
      img: "https://picsum.photos/id/122/300/400",
      createdAt: "2022-10-13T18:32:25.812Z",
    },
  ],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
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
          (a, b) =>
            new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
        );
      }
    },
  },
});

export const { addMovie, toggleViewed, deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;

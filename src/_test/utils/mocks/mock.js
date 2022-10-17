export const moviesData = {
  viewedMovies: [
    {
      id: "1",
      title: "Movie 1",
      genres: ["Horror", "Comedy"],
      viewed: true,
      img: "https://picsum.photos/id/118/300/400",
      createdAt: "2022-10-16T20:25:58.420Z",
    },
  ],
  unViewedMovies: [
    {
      id: "2",
      title: "Movie 2",
      genres: ["Horror", "Comedy"],
      viewed: false,
      img: "https://picsum.photos/id/159/300/400",
      createdAt: "2022-10-16T20:51:29.081Z",
    },
    {
      id: "3",
      title: "Movie 3",
      genres: ["Romance"],
      viewed: false,
      img: "https://picsum.photos/id/122/300/400",
      createdAt: "2022-10-16T20:51:45.249Z",
    },
    {
      id: "4",
      title: "Movie 4",
      genres: ["Test"],
      viewed: false,
      img: "https://picsum.photos/id/168/300/400",
      createdAt: "2022-10-16T20:52:14.784Z",
    },
    {
      id: "5",
      title: "Movie 5",
      genres: ["Random"],
      viewed: false,
      img: "https://picsum.photos/id/149/300/400",
      createdAt: "2022-10-16T20:52:36.529Z",
    },
  ],
};

export const singleMovieData = {
  id: "1",
  title: "Movie 1",
  genres: ["Horror", "Comedy", "Romance"],
  viewed: false,
  img: "https://picsum.photos/id/149/300/400",
  createdAt: "2022-10-16T20:52:36.529Z",
};

export const activeFiltersData = {
  activeFilters: [],
  search: "",
};

export const activeLoadingData = {
  value: false,
};

export const emptyStoreData = {
  movies: { viewedMovies: [], unViewedMovies: [] },
  filters: { activeFilters: [], search: "" },
  loading: { value: false },
};

export const sampleFiltersData = ["Horror", "Comedy", "Romance"];

export const customStoreData = (movies, activeFilters, loading) => {
  return {
    movies: movies ? moviesData : emptyStoreData.movies,
    filters: activeFilters ? activeFiltersData : emptyStoreData.filters,
    loading: loading ? activeLoadingData : emptyStoreData.loading,
  };
};

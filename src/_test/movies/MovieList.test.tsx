import { screen } from "@testing-library/react";
import MovieList from "../../components/movies/list";
import { customStoreData, moviesData } from "../utils/mocks/mock";
import { renderWithProviders } from "../utils/test-utils";

describe("Renders MovieList component correctly", () => {
  test("Renders default MovieList and each component correctly", () => {
    renderWithProviders(<MovieList movies={[]} />);
    const movieList = screen.getByTestId("movie-list");

    expect(movieList).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Vaya, no hemos encontrado películas...",
      })
    ).toBeInTheDocument();

    expect(movieList).toMatchSnapshot();
  });

  test("Renders MovieCard component for each movie passed as prop", () => {
    const movies = [...moviesData.unViewedMovies, ...moviesData.viewedMovies];
    renderWithProviders(<MovieList movies={movies} />);

    expect(screen.getByTestId("movie-list")).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", {
        name: "Vaya, no hemos encontrado películas...",
      })
    ).toBeNull();

    movies.forEach((movie: Movie) => {
      expect(screen.getByTestId(`movie-card-${movie.id}`)).toBeInTheDocument();
    });
  });

  test("Renders Movie Skeleton component for each movie passed as prop if loading is true", () => {
    const movies = [...moviesData.unViewedMovies, ...moviesData.viewedMovies];
    const customStore = customStoreData(true, false, true);
    renderWithProviders(<MovieList movies={movies} />, {
      preloadedState: {
        ...customStore,
      },
    });

    expect(screen.getByTestId("movie-list")).toBeInTheDocument();

    movies.forEach((movie: Movie) => {
      expect(
        screen.getByTestId(`movie-skeleton-${movie.id}`)
      ).toBeInTheDocument();
    });
  });
});

import { screen } from "@testing-library/react";
import Detail from "../../screens/detail";
import { customStoreData } from "../utils/mocks/mock";
import { renderWithProviders } from "../utils/test-utils";

describe("Renders Detail page correctly with empty list on movies store data", () => {
  test("Renders correctly", async () => {
    renderWithProviders(<Detail />, {}, "/detail");

    expect(screen.getByTestId("detail-component")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Vaya, no hemos encontrado películas...",
      })
    ).toBeInTheDocument();
  });

  test("Renders only movies with genre included on query parameter 'genre'", async () => {
    const customStore = customStoreData(true, false, false);
    const genre = "Horror";
    const getMoviesByGenre = (genre: string) => {
      return [
        ...customStore.movies.unViewedMovies,
        ...customStore.movies.viewedMovies,
      ].filter((movie) => movie.genres.includes(genre));
    };

    renderWithProviders(
      <Detail />,
      {
        preloadedState: {
          ...customStore,
        },
      },
      `/detail/?genre=${genre}`
    );

    getMoviesByGenre(genre).forEach((movie) => {
      expect(screen.getByText(movie.title)).toBeInTheDocument();
    });

    getMoviesByGenre("Romance").forEach((movie) => {
      expect(screen.queryByText(movie.title)).toBeNull();
    });
  });
});

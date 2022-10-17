import { fireEvent, screen } from "@testing-library/react";
import Home from "../../screens/home";
import { renderWithProviders } from "../utils/test-utils";
import { customStoreData } from "../utils/mocks/mock";

const customStore = customStoreData(true, false, false);
const movies = [
  ...customStore.movies.unViewedMovies,
  ...customStore.movies.viewedMovies,
];

describe("Renders Home page correctly", () => {
  test("Renders Each component correctly", () => {
    renderWithProviders(<Home />);

    const homeScreen = screen.getByTestId("home-component");
    const form = screen.getByTestId("form-component");
    const filters = screen.getByTestId("filters-component");
    const movies = screen.getByTestId("movies-list");

    expect(homeScreen).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(filters).toBeInTheDocument();
    expect(movies).toBeInTheDocument();

    expect(
      screen.getByRole("checkbox", { name: "Horror" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "Comedy" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Vaya, no hemos encontrado películas...",
      })
    ).toBeInTheDocument();

    expect(homeScreen).toMatchSnapshot();
  });

  test("Renders Movie component for each card", () => {
    renderWithProviders(<Home />, {
      preloadedState: {
        ...customStore,
      },
    });

    movies.forEach((movie) => {
      expect(screen.getByTestId(`movie-card-${movie.id}`)).toBeInTheDocument();
    });
  });

  test("Renders Movie component with specific info", () => {
    renderWithProviders(<Home />, {
      preloadedState: {
        ...customStore,
      },
    });

    customStore.movies.unViewedMovies.forEach((movie) => {
      expect(screen.getByText(movie.title)).toBeInTheDocument();
    });
  });

  test("Renders Skeletons component when deleting a movie", () => {
    renderWithProviders(<Home />, {
      preloadedState: {
        ...customStore,
      },
    });

    const deleteButton = screen.getByTestId("delete-movie-btn-1");
    fireEvent.click(deleteButton);

    expect(screen.queryByTestId("movie-skeleton-1")).toBeNull();
    expect(screen.getByTestId("movie-skeleton-2")).toBeInTheDocument();
    expect(screen.getByTestId("movie-skeleton-3")).toBeInTheDocument();
    expect(screen.getByTestId("movie-skeleton-4")).toBeInTheDocument();
    expect(screen.getByTestId("movie-skeleton-5")).toBeInTheDocument();
  });
});

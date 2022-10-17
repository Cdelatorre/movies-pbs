import { fireEvent, screen } from "@testing-library/react";
import MovieCard from "../../components/movies/card/index";
import { singleMovieData as movie } from "../utils/mocks/mock";
import { renderWithProviders } from "../utils/test-utils";

describe("Renders MovieCard component correctly", () => {
  test("Renders default MovieCard and each component correctly", () => {
    renderWithProviders(<MovieCard {...movie} />);

    expect(screen.getByTestId(`movie-card-${movie.id}`)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: movie.title,
      })
    ).toBeInTheDocument();
    movie.genres.forEach((genre) => {
      expect(screen.getByTestId(`genre-tab-${genre}`)).toBeInTheDocument();
    });
  });

  test("Renders viewed state if movie has viewed prop as true", async () => {
    renderWithProviders(<MovieCard {...movie} viewed />);

    const movieCard = await screen.findByTestId(`movie-card-${movie.id}`);

    expect(movieCard).toHaveClass("viewed-card");
  });

  test("Change title tag for input to edit if edit button is checked", () => {
    renderWithProviders(<MovieCard {...movie} viewed />);

    const editButton = screen.getByTestId(`edit-movie-btn-${movie.id}`);

    expect(screen.queryByDisplayValue(movie.title)).toBeNull();
    expect(
      screen.getByRole("heading", {
        name: movie.title,
      })
    ).toBeInTheDocument();

    fireEvent.click(editButton);

    expect(
      screen.queryByRole("heading", {
        name: movie.title,
      })
    ).toBeNull();
    expect(screen.getByDisplayValue(movie.title)).toBeInTheDocument();
  });
});

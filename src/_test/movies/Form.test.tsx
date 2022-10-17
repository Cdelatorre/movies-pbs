import { fireEvent, screen } from "@testing-library/react";
import MovieForm from "../../components/movies/form";
import { customStoreData } from "../utils/mocks/mock";
import { renderWithProviders } from "../utils/test-utils";

describe("Renders Movie form component correctly", () => {
  test("Renders default Movie form and each tag correctly", () => {
    renderWithProviders(<MovieForm />);
    const titleInput = screen.getByTestId("input-text-title");
    const genreInput = screen.getByTestId("input-text-currentGenre");

    expect(screen.getByTestId("form-component")).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(genreInput).toBeInTheDocument();
  });

  test("Fills inputs correctly on user input interaction", () => {
    renderWithProviders(<MovieForm />);
    const titleInput = screen.getByTestId("input-text-title");
    const genreInput = screen.getByTestId("input-text-currentGenre");

    fireEvent.change(titleInput, {
      target: { value: "Movie mock title" },
    });
    expect(screen.getByDisplayValue("Movie mock title")).toBeInTheDocument();
    fireEvent.change(genreInput, {
      target: { value: "Genre" },
    });
    expect(screen.getByDisplayValue("Genre")).toBeInTheDocument();
  });

  test("If user press enter key and genre input is focused & filled, is added as GenreTab component below title input", () => {
    renderWithProviders(<MovieForm />);
    const genreInput = screen.getByTestId("input-text-currentGenre");

    fireEvent.change(genreInput, {
      target: { value: "Genre" },
    });
    expect(screen.getByDisplayValue("Genre")).toBeInTheDocument();

    genreInput.focus();

    fireEvent.keyPress(genreInput, { key: "Enter", keyCode: 13, charCode: 13 });

    expect(screen.getByTestId("genre-tab-Genre")).toBeInTheDocument();
    expect(screen.queryByDisplayValue("Genre")).toBeNull();
  });

  test("Create movie in form calls redux dispatch", () => {
    const customStore = customStoreData(true, false, false);

    const { store } = renderWithProviders(<MovieForm />, {
      preloadedState: {
        ...customStore,
      },
    });

    console.log(1, store.getState().movies.unViewedMovies);

    const titleInput = screen.getByTestId("input-text-title");
    const genreInput = screen.getByTestId("input-text-currentGenre");
    const submitButton = screen.getByText("Create");

    /*---- filling form ----*/
    fireEvent.change(titleInput, {
      target: { value: "Movie mock title" },
    });
    fireEvent.change(genreInput, {
      target: { value: "Genre" },
    });
    genreInput.focus();
    fireEvent.keyPress(genreInput, { key: "Enter", keyCode: 13, charCode: 13 });
    /*----------------------*/

    fireEvent.click(submitButton);
    expect(screen.queryByDisplayValue("Genre")).toBeNull();
    expect(screen.queryByDisplayValue("Movie mock title")).toBeNull();

    expect(
      store
        .getState()
        .movies.unViewedMovies.find(
          (movie) =>
            movie.title === "Movie mock title" && movie.genres.includes("Genre")
        )
    ).toBeTruthy();
  });
});

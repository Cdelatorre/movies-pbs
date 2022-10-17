/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

import { cleanup, fireEvent, screen } from "@testing-library/react";
import { TIME_OUT } from "../constants";
import { customStoreData } from "./utils/mocks/mock";
import { renderWithProviders } from "./utils/test-utils";
import App from "../App";

afterAll(() => {
  cleanup()
})

describe("Renders App component correctly", () => {
  test("Renders correctly each component", async () => {
    renderWithProviders(<App />);

    expect(screen.getByTestId("home-component")).toBeInTheDocument();
    expect(screen.getByTestId("navbar-component")).toBeInTheDocument();
  });

  /* ------------------ Async testing ------------------ */
  test("Renders Loader component when deleting a movie and should be removed after 3 seconds", async () => {
    const customStore = customStoreData(true, false, false);
    renderWithProviders(<App />, {
      preloadedState: {
        ...customStore,
      },
    });

    const deleteButton = screen.getByTestId("delete-movie-btn-1");

    fireEvent.click(deleteButton);

    expect(screen.getByTestId("loader")).toBeInTheDocument();

    await new Promise((r) => setTimeout(r, TIME_OUT));

    expect(screen.queryByTestId("loader")).toBeNull();
  });

  test("Renders Loader component when searching a movie and should be removed after 3 seconds", async () => {
    const customStore = customStoreData(true, false, false);
    renderWithProviders(<App />, {
      preloadedState: {
        ...customStore,
      },
    });

    const searchInput = screen.getByTestId("input-text-search");
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByTestId("test-search-btn");
    expect(searchButton).toBeInTheDocument();

    fireEvent.change(searchInput, {
      target: { value: "Movie mock title" },
    });
    expect(screen.getByDisplayValue("Movie mock title")).toBeInTheDocument();

    fireEvent.click(searchButton)

    expect(screen.getByTestId("loader")).toBeInTheDocument();

    await new Promise((r) => setTimeout(r, TIME_OUT));

    expect(screen.queryByTestId("loader")).toBeNull();
  });

  test("Renders Loader component when creating a movie and should be removed after 3 seconds", async () => {
    const customStore = customStoreData(true, false, false);
    renderWithProviders(<App />, {
      preloadedState: {
        ...customStore,
      },
    });

    const titleInput = screen.getByTestId("input-text-title");
    const genreInput = screen.getByTestId("input-text-currentGenre");
    const submitButton = screen.getByText("Create");

    /*---- filling form ----*/
    fireEvent.change(titleInput, {
      target: { value: "Movie mock title" },
    });
    expect(screen.getByDisplayValue("Movie mock title")).toBeInTheDocument();
    fireEvent.change(genreInput, {
      target: { value: "Genre" },
    });
    expect(screen.getByDisplayValue("Genre")).toBeInTheDocument();
    genreInput.focus();
    fireEvent.keyPress(genreInput, { key: "Enter", keyCode: 13, charCode: 13 });
    /*----------------------*/

    fireEvent.click(submitButton)

    expect(screen.getByTestId("loader")).toBeInTheDocument();

    await new Promise((r) => setTimeout(r, TIME_OUT));

    expect(screen.queryByTestId("loader")).toBeNull();
  });
  /* ------------- End Async testing ------------- */

  test("Renders detail page if query parameter 'genre' is included on url", () => {
    const customStore = customStoreData(true, false, false);

    renderWithProviders(<App />, {
      preloadedState: {
        ...customStore,
      },
    }, "/detail/?genre=Horror");

    expect(screen.queryByTestId("home-component")).toBeNull();
    expect(screen.getByTestId("detail-component")).toBeInTheDocument();
  });
});

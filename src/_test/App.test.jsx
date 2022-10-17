/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

import { fireEvent, screen } from "@testing-library/react";
import { TIME_OUT } from "../constants";
import { customStoreData } from "./utils/mocks/mock";
import { renderWithProviders } from "./utils/test-utils";
import App from "../App";

describe("Renders App component correctly", () => {
  test("Renders correctly each component", async () => {
    renderWithProviders(<App />);

    expect(screen.getByTestId("home-component")).toBeInTheDocument();
    expect(screen.getByTestId("navbar-component")).toBeInTheDocument();
  });

  test("Renders detail page if query parameter 'genre' is included on url", async () => {
    const customStore = customStoreData(true, false, false);

    renderWithProviders(<App />, {
      preloadedState: {
        ...customStore,
      },
    }, "/detail/?genre=Horror");

    expect(screen.queryByTestId("home-component")).toBeNull();
    expect(screen.getByTestId("detail-component")).toBeInTheDocument();
  });

  /* ------------- Async test ------------- */
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
});

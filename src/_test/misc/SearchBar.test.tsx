import { fireEvent, screen } from "@testing-library/react";
import SearchBar from "../../components/misc/search-bar";
import { customStoreData } from "../utils/mocks/mock";
import { renderWithProviders } from "../utils/test-utils";

describe("Renders SearchBar component correctly", () => {
  test("Renders SearchBar default component correctly", () => {
    renderWithProviders(<SearchBar />);

    const searchBar = screen.getByTestId("search-bar");
    const input = screen.getByTestId("input-text-search");
    const searchBtn = screen.getByTestId("test-search-btn");

    expect(screen.queryByPlaceholderText("Search movie")).toBe(input);
    expect(searchBar).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();

    expect(searchBar).toMatchSnapshot();
  });

  test("Fires action when input is filled and search button clicked", () => {
    const customStore = customStoreData(true, false, false);

    const { store } = renderWithProviders(<SearchBar />, {
      preloadedState: {
        ...customStore,
      },
    });

    const input = screen.getByTestId("input-text-search");
    const searchBtn = screen.getByTestId("test-search-btn");

    expect(store.getState().filters.search).toBe("");

    fireEvent.change(input, {
      target: {
        value: "Movie title",
      },
    });
    fireEvent.click(searchBtn);

    expect(screen.getByDisplayValue("Movie title")).toBeInTheDocument();
    expect(store.getState().filters.search).toBe("Movie title");
  });
});

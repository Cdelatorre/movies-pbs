import { fireEvent, screen } from "@testing-library/react";
import GenreTab from "../../components/movies/genre-tab";
import { renderWithRouter } from "../utils/test-utils";

describe("Renders GenreTab component correctly", () => {
  test("Renders default GenreTab component correctly", () => {
    renderWithRouter(<GenreTab id="Genre">Genre</GenreTab>);

    const genreTab = screen.getByTestId("genre-tab-Genre");

    expect(genreTab).toBeInTheDocument();
    expect(screen.getByText("Genre")).toBeInTheDocument();

    expect(genreTab).toMatchSnapshot();
  });

  test("Renders delete action button and calls onDelete function when clicked", () => {
    const onDelete = jest.fn();
    renderWithRouter(
      <GenreTab id="Genre" onDelete={onDelete}>
        Genre
      </GenreTab>
    );

    const deleteBtn = screen.getByTestId("genre-delete-Genre");

    expect(deleteBtn).toBeInTheDocument();
    fireEvent.click(deleteBtn);

    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});

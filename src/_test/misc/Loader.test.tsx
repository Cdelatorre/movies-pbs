import { render, screen } from "@testing-library/react";
import Loader from "../../components/misc/loader";

describe("Renders Loader component correctly", () => {
  test("Renders Loader default component correctly", () => {
    render(<Loader />);

    const containerLoader = screen.getByTestId("loader");
    const loader = screen.getByText("Loading...");

    expect(containerLoader).toBeInTheDocument();
    expect(loader).toBeInTheDocument();

    expect(containerLoader).toMatchSnapshot();
  });
});

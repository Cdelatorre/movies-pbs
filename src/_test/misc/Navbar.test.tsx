import { createMemoryHistory } from "@remix-run/router";
import { fireEvent, screen } from "@testing-library/react";
import NavBar from "../../components/misc/navbar";
import { renderWithRouter } from "../utils/test-utils";

describe("Renders Navbar component correctly", () => {
  test("Renders Navbar default component correctly", () => {
    renderWithRouter(<NavBar />);

    const navbar = screen.getByTestId("navbar-component");
    const links: HTMLAnchorElement[] = screen.getAllByRole("link");

    expect(navbar).toBeInTheDocument();
    expect(links[0].textContent).toEqual("");
    expect(links[0].href).toContain("/");

    expect(links[1].textContent).toEqual("Horror");
    expect(links[1].href).toContain(
      `${process.env.REACT_APP_DEV_URL}/?genre=horror`
    );

    expect(links[2].textContent).toEqual("Romance");
    expect(links[2].href).toContain(
      `${process.env.REACT_APP_DEV_URL}/?genre=romance`
    );

    expect(links[3].textContent).toEqual("Comedy");
    expect(links[3].href).toContain(
      `${process.env.REACT_APP_DEV_URL}/?genre=comedy`
    );

    expect(navbar).toMatchSnapshot();
  });

  test("Adds history url on click", () => {
    const history = createMemoryHistory();

    renderWithRouter(<NavBar />, history);

    const navLink = screen.getByRole("link", {
      name: "Romance",
    });

    fireEvent.click(navLink);
    expect(history.location.pathname).toEqual("/");
    expect(history.location.search).toEqual("?genre=romance");
  });
});

import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import Button from "../../components/misc/button/index";

const actionBtnFn = jest.fn();

describe("Renders Button component correctly", () => {
  test("Renders default Button component correctly", async () => {
    renderWithProviders(
      <Button id="btn-id" action={actionBtnFn}>
        Mock test
      </Button>
    );

    const buttonElement = screen.getByTestId("test-btn-id");

    expect(buttonElement).toBeInTheDocument();
    expect(screen.getByText("Mock test")).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn btn-primary");
  });

  test("Renders success button type if btnType prop is passed", async () => {
    renderWithProviders(
      <Button id="btn-id" action={actionBtnFn} btnType="success">
        Mock test
      </Button>
    );
    const buttonElement = screen.getByTestId("test-btn-id");

    expect(buttonElement).toHaveClass("btn btn-success");
  });

  test("Fires action function passed as prop if button is clicked", async () => {
    renderWithProviders(
      <Button id="btn-id" action={actionBtnFn}>
        Mock test
      </Button>
    );
    const buttonElement = screen.getByTestId("test-btn-id");

    fireEvent.click(buttonElement);
    expect(actionBtnFn).toHaveBeenCalledTimes(1);
  });
});

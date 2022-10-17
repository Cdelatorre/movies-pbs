import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import Input from "../../components/misc/input";

describe("Renders Input component correctly", () => {
  test("Renders Input default component correctly", () => {
    renderWithProviders(<Input name="test-name" label="Label test" />);

    const input = screen.getByTestId("input-text-test-name");
    expect(input).toBeInTheDocument();
    expect(screen.getByText("Label test")).toBeInTheDocument();

    fireEvent.change(input, {
      target: { value: "Movie mock title" },
    });
    expect(screen.getByDisplayValue("Movie mock title")).toBeInTheDocument();
  });

  test("Input is modified it's default behavior by adding props", () => {
    renderWithProviders(
      <Input
        name="test-name"
        label="Label test"
        type="number"
        value="1"
        error="test message error"
      />
    );

    const input = screen.getByTestId("input-number-test-name");
    expect(input).toBeInTheDocument();

    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
    expect(screen.getByText("Label test")).toBeInTheDocument();
    expect(screen.getByText("test message error")).toBeInTheDocument();
  });
});

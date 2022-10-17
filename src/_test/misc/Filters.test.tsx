import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import Filters from "../../components/misc/filters/index";
import { sampleFiltersData } from "../utils/mocks/mock";

describe("Renders Filters component correctly", () => {
  test("Renders Filters default component correctly", () => {
    renderWithProviders(
      <Filters filters={sampleFiltersData} activeFilters={[]} />
    );

    expect(screen.getByTestId("filters-component")).toBeInTheDocument();
    sampleFiltersData.forEach((genre) => {
      expect(screen.getByTestId(`input-checkbox-${genre}`)).toBeInTheDocument();
    });
    expect(screen.getByTestId("test-search-btn")).toBeInTheDocument();
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
  });

  test("Inputs are checked if filters includes some activeFilters", () => {
    const activeFilters = ["Horror", "Comedy"];
    renderWithProviders(
      <Filters filters={sampleFiltersData} activeFilters={activeFilters} />
    );

    activeFilters.forEach((genre) => {
      const input = screen.getByTestId(`input-checkbox-${genre}`);
      expect(input).toHaveAttribute("checked");
    });

    sampleFiltersData
      .filter((f) => !activeFilters.includes(f))
      .forEach((genre) => {
        const input = screen.getByTestId(`input-checkbox-${genre}`);
        expect(input).not.toHaveAttribute("checked");
      });
  });
});

import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import Filters from "../../components/misc/filters/index";
import { customStoreData, sampleFiltersData } from "../utils/mocks/mock";

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
    expect(screen.getByTestId("test-reset-filters-btn")).toBeInTheDocument();
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

  test("Inputs click calls redux toggleFilter action, and reset-button clears out activeFilters", () => {
    const activeFilters = ["Horror", "Comedy"];
    const customStore = customStoreData(true, false, false);

    const { store } = renderWithProviders(
      <Filters filters={sampleFiltersData} activeFilters={activeFilters} />,
      {
        preloadedState: {
          ...customStore,
        },
      }
    );
    const resetBtn = screen.getByTestId("test-reset-filters-btn");

    expect(store.getState().filters.activeFilters).toEqual([]);

    activeFilters.forEach((genre) => {
      const input = screen.getByTestId(`input-checkbox-${genre}`);
      fireEvent.click(input);
    });
    expect(store.getState().filters.activeFilters).toEqual(activeFilters);

    fireEvent.click(resetBtn);
    expect(store.getState().filters.activeFilters).toEqual([]);
  });
});

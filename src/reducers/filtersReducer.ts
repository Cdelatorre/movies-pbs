import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  value: number;
  activeFilters: string[];
}

const initialState: FiltersState = {
  value: 0,
  activeFilters: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter: (state, action: PayloadAction<string>) => {
      const filter = action.payload;
      const { activeFilters } = state;
      state.activeFilters = activeFilters.includes(filter)
        ? activeFilters.filter((f) => f !== filter)
        : [...activeFilters, filter];
    },
    resetFilters: (state) => {
      state.activeFilters = [];
    },
  },
});

export const { toggleFilter, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;

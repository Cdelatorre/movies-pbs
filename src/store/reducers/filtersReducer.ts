import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  activeFilters: string[];
  search: string;
}

const initialState: FiltersState = {
  activeFilters: [],
  search: "",
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
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    resetFilters: (state) => {
      state.activeFilters = [];
    },
  },
});

export const { toggleFilter, resetFilters, setSearch } = filtersSlice.actions;

export default filtersSlice.reducer;

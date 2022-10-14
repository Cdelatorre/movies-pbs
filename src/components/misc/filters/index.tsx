import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleFilter,
  resetFilters,
} from "../../../store/reducers/filtersReducer.ts";
import { setSearch } from "../../../store/reducers/filtersReducer.ts";
import Button from "../button/index.tsx";
import SearchBar from "../search-bar/index.tsx";
import Input from "../input/index.tsx";

const Filters = ({
  filters,
  activeFilters,
}: FiltersComponentProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(setSearch(""));
    dispatch(resetFilters());
  };

  const handleAddFilter = (e): void => {
    const { value } = e.target as HTMLInputElement;
    dispatch(toggleFilter(value));
  };

  return (
    <div className="d-flex flex-column align-items-start">
      <h2 className="text-light text-start mb-4">Find your movie!</h2>
      <div className="sub-decoration"></div>
      <div className="d-flex flex-wrap">
        <div className="d-flex text-light flex-row flex-wrap w-100">
          {filters.map((filter) => {
            return (
              <Input
                key={filter}
                readOnly
                label={filter}
                type="checkbox"
                onClick={handleAddFilter}
                checked={activeFilters.includes(filter)}
                value={filter}
              />
            );
          })}
          <Button action={handleReset}>
            <i className="fas fa-sync-alt"></i>
          </Button>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Filters;

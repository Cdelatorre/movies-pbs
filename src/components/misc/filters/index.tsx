import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleFilter,
  resetFilters,
} from "../../../store/reducers/filtersReducer.ts";
import Button from "../button/index.tsx";
import SearchBar from "../search-bar/index.tsx";
import Input from "../input/index.tsx";

const Filters = ({
  filters,
  activeFilters,
}: FiltersComponentProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleAddFilter = (e): void => {
    const { value } = e.target as HTMLInputElement;
    dispatch(toggleFilter(value));
  };

  return (
    <div className="d-flex flex-column align-items-start">
      <h3 className="text-light mb-4">Find your movie!</h3>
      <div className="d-flex flex-wrap">
        <div className="d-flex text-light flex-row flex-wrap">
          {filters.map((filter) => {
            return (
              <div key={filter}>
                <Input
                  readOnly
                  label={filter}
                  extraClassNames="form-check-input border border-light"
                  type="checkbox"
                  onClick={handleAddFilter}
                  checked={activeFilters.includes(filter)}
                  value={filter}
                  key={filter}
                />
              </div>
            );
          })}
        </div>
        <Button
          action={() => dispatch(resetFilters())}
          size="sm"
          btnType="secondary"
        >
          Reset filters
        </Button>
      </div>
      <SearchBar />
    </div>
  );
};

export default Filters;

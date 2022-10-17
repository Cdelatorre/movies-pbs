import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleFilter,
  resetFilters,
} from "../../../store/reducers/filtersReducer";
import { setSearch } from "../../../store/reducers/filtersReducer";
import Button from "../button";
import SearchBar from "../search-bar";
import Input from "../input";

const Filters = ({
  filters,
  activeFilters,
}: FiltersComponentProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(setSearch(""));
    dispatch(resetFilters());
  };

  const handleAddFilter = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.target as HTMLInputElement;
    dispatch(toggleFilter(value));
  };

  return (
    <div
      data-testid="filters-component"
      className="filters-container d-flex flex-column align-items-start"
    >
      <h2 className="text-light text-start mb-4">Find your movie!</h2>
      <div className="sub-decoration"></div>
      <div className="d-flex flex-wrap">
        <div className="d-flex text-light flex-row flex-wrap w-100">
          {filters?.map((filter: string) => {
            return (
              <Input
                readOnly
                id={filter}
                name={filter}
                key={filter}
                label={filter}
                value={filter}
                type="checkbox"
                onClick={handleAddFilter}
                checked={activeFilters.includes(filter)}
              />
            );
          })}
          <Button id="reset-filters-btn" action={handleReset}>
            <i className="fas fa-sync-alt"></i>
          </Button>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Filters;

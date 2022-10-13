import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFilter,
  resetFilters,
} from "../../../reducers/filtersReducer.ts";
import Button from "../button/index.tsx";

const Filters = ({ filters }) => {
  const activeFilters = useSelector((state) => state.counter.activeFilters);
  const dispatch = useDispatch();

  const handleAddFilter = (e) => {
    dispatch(toggleFilter(e.target.value));
  };

  return (
    <div className="d-flex flex-column align-items-start">
      <h3 className="text-light mb-4">Find your movie!</h3>
      <div className="d-flex flex-wrap">
        <div className="d-flex text-light flex-row flex-wrap">
          {filters.map((filter) => {
            return (
              <div
                key={filter}
                className="me-2 d-flex align-items-center justify-content-center"
              >
                <input
                  readOnly
                  onClick={handleAddFilter}
                  checked={activeFilters.includes(filter)}
                  value={filter}
                  type="radio"
                  key={filter}
                  className="btn me-1"
                />
                <h6 className="m-0">{filter}</h6>
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
    </div>
  );
};

export default Filters;

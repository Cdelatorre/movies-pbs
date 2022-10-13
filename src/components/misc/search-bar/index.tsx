import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store.ts";
import { setSearch } from "../../../store/reducers/filtersReducer.ts";
import Input from "../input/index.tsx";

const SearchBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const { search } = useSelector((state: RootState) => state.filters);

  return (
    <div className="search-bar mb-5 w-100">
      <Input
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Search movie"
      />
    </div>
  );
};

export default SearchBar;

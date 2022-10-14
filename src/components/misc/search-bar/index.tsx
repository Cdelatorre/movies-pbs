import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store.ts";
import { setSearch } from "../../../store/reducers/filtersReducer.ts";
import { setLoading } from "../../../store/reducers/loadingReducer.ts";
import Input from "../input/index.tsx";
import Button from "../button/index.tsx";

const SearchBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const loading = useSelector((state: RootState) => state.loading.value);

  const handleSearch = () => {
    if (!loading) {
      dispatch(setLoading(true));
      dispatch(setSearch(searchInput));
    }
  };
  return (
    <div className="search-bar mb-5 mt-4 w-100 d-flex ">
      <Input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search movie"
        extraClassNames="w-100"
      />
      <Button
        size="sm"
        btnType="success"
        extraClassNames="ms-3"
        action={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;

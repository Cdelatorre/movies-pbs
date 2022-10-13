import React from "react";
import Input from "../input/index.tsx";

const SearchBar = () => {
  return (
    <div className="search-bar mb-5">
      <Input placeholder="Search movie" />
    </div>
  );
};

export default SearchBar;

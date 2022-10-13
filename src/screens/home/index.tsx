import React from "react";
import Filters from "../../components/misc/filters/index.tsx";
import SearchBar from "../../components/misc/search-bar/index.tsx";
import MovieCard from "../../components/movies/card/index.tsx";
import MovieForm from "../../components/movies/form/index.tsx";

const FILTERS = ["Horror", "Romance", "Comedy"];

const Home = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <MovieForm />
        </div>
        <div>
          <Filters activeFilters={["Romance"]} filters={FILTERS} />
          <SearchBar />
        </div>
        <div className="row">
          {["", "", 2, 2, 2, 2, 2, 2, 2, 2, 2].map((el, i) => {
            return (
              <div key={i} className=" col-lg-3 col-sm-6">
                <MovieCard />;
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

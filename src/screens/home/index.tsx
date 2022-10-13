import React from "react";
import { useSelector } from "react-redux";
import Filters from "../../components/misc/filters/index.tsx";
import MovieCard from "../../components/movies/card/index.tsx";
import MovieForm from "../../components/movies/form/index.tsx";
import { FILTERS } from "../../constants";
import { RootState } from "../../store.ts";

const Home = () => {
  const { activeFilters, search } = useSelector(
    (state: RootState) => state.filters
  );

  const movies = useSelector((state: RootState) => {
    let allMovies = [
      ...state.movies.unViewedMovies,
      ...state.movies.viewedMovies,
    ];

    if (search) {
      allMovies = allMovies.filter(({ title }) =>
        new RegExp(search, "i").test(title)
      );
    }

    if (activeFilters.length) {
      allMovies = allMovies.filter((mov: Movie) => {
        return mov.genres.some((gen) => {
          return activeFilters.includes(gen);
        });
      });
    }

    return allMovies;
  });

  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <MovieForm />
        </div>
        <div>
          <Filters activeFilters={activeFilters} filters={FILTERS} />
        </div>
        <div className="row">
          {movies.map((movie, i) => {
            return (
              <div key={i} className=" col-lg-3 col-sm-6">
                <MovieCard {...movie} />;
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { useSelector } from "react-redux";
import Filters from "../../components/misc/filters/index.tsx";
import MovieSkeleton from "../../components/misc/skeletons/movie/index.tsx";
import MovieCard from "../../components/movies/card/index.tsx";
import MovieForm from "../../components/movies/form/index.tsx";
import { FILTERS } from "../../constants";
import { RootState } from "../../store.ts";

const Home = () => {
  const { activeFilters, search } = useSelector((s: RootState) => s.filters);
  const loading = useSelector((s: RootState) => s.loading.value);
  const filterRegex = new RegExp(activeFilters.join("|"), "i");
  const searchRegex = new RegExp(search, "i");

  const movies = useSelector((state: RootState) => {
    let allMovies = [
      ...state.movies.unViewedMovies,
      ...state.movies.viewedMovies,
    ];

    if (search) {
      allMovies = allMovies.filter(({ title }) => searchRegex.test(title));
    }

    if (activeFilters.length) {
      allMovies = allMovies.filter((mov: Movie) => {
        return mov.genres.some((gen) => {
          return filterRegex.test(gen);
        });
      });
    }

    return allMovies;
  });

  return (
    <div>
      <div className="mt-5">
        <div className="container d-flex justify-content-center">
          <MovieForm />
        </div>
        <div className="container">
          <Filters activeFilters={activeFilters} filters={FILTERS} />
        </div>
        <div className="row mb-5">
          {movies.length
            ? movies.map((movie, i) => {
                if (loading) return <MovieSkeleton key={movie.id} />;
                return (
                  <div key={movie.id} className="col-lg-3 col-sm-6">
                    <MovieCard {...movie} />;
                  </div>
                );
              })
            : !loading && (
                <div className="container">
                  <h4 className="text-light mb-5 p-5 border rounded border-light">
                    Vaya, no hemos encontrado películas...
                  </h4>
                </div>
              )}
        </div>
      </div>
    </div>
  );
};

export default Home;

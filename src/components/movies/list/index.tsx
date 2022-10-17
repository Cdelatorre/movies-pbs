import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import MovieSkeleton from "../../misc/skeletons/movie";
import MovieCard from "../card";

const MovieList = ({ movies }: MovieListComponentProps) => {
  const loading = useSelector((s: RootState) => s.loading.value);

  return (
    <div className="row mb-5" data-testid="movie-list">
      {movies.length
        ? movies.map((movie, i) => {
            if (loading) {
              return <MovieSkeleton id={movie.id} key={movie.id} />;
            }
            return (
              <div
                key={movie.id}
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12"
              >
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
  );
};

export default MovieList;

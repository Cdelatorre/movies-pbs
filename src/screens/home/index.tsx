import { useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import Filters from "../../components/misc/filters";
import MovieSkeleton from "../../components/misc/skeletons/movie";
import MovieCard from "../../components/movies/card";
import MovieForm from "../../components/movies/form";
import { FILTERS } from "../../constants";
import { RootState } from "../../store";

const Home = () => {
  const { activeFilters, search } = useSelector((s: RootState) => s.filters);
  const loading = useSelector((s: RootState) => s.loading.value);
  const [searchParams] = useSearchParams();
  const genre = searchParams.get("genre");

  const searchRegex = new RegExp(search, "i");
  const filterRegex = new RegExp(activeFilters.join("|"), "i");

  const movies = useSelector((state: RootState) => {
    let allMovies = [
      ...state.movies.unViewedMovies,
      ...state.movies.viewedMovies,
    ];

    if (search) {
      allMovies = allMovies.filter(({ title }) => searchRegex.test(title));
    }

    if (activeFilters.length) {
      allMovies = allMovies.filter((mov: Movie) =>
        mov.genres.some((gen: string) => filterRegex.test(gen))
      );
    }

    return allMovies;
  });

  if (genre) return <Navigate to={`/detail?genre=${genre}`} replace={true} />;

  return (
    <div>
      <div className="mt-5">
        <div className="container d-flex justify-content-center">
          <MovieForm />
        </div>
        <div className="container">
          <Filters activeFilters={activeFilters} filters={FILTERS} />
        </div>
        <div className="container">
          <div className="row mb-5">
            {movies.length
              ? movies.map((movie, i) => {
                  if (loading) return <MovieSkeleton key={movie.id} />;
                  return (
                    <div
                      key={movie.id}
                      className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
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
        </div>
      </div>
    </div>
  );
};

export default Home;

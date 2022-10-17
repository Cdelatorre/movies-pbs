import { useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import Filters from "../../components/misc/filters";
import MovieForm from "../../components/movies/form";
import MovieList from "../../components/movies/list";
import { FILTERS } from "../../constants";
import { RootState } from "../../store";

const Home = (): JSX.Element => {
  const { activeFilters, search } = useSelector((s: RootState) => s.filters);
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
    <div data-testid="home-component">
      <div className="mt-5">
        <div className="container d-flex justify-content-center">
          <MovieForm />
        </div>
        <div className="container">
          <Filters activeFilters={activeFilters} filters={FILTERS} />
        </div>
        <div data-testid="movies-list" className="container movie-list">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Home;

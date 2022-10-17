import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../store";
import MovieList from "../../components/movies/list";

const Detail = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const genre = searchParams.get("genre");

  const movies = useSelector((s: RootState) => {
    let allMovies = [...s.movies.unViewedMovies, ...s.movies.viewedMovies];

    if (genre) {
      return allMovies.filter((mov: Movie) =>
        mov.genres.some(
          (gen: string) => gen.toLowerCase() === genre.toLowerCase()
        )
      );
    }
    return allMovies;
  });

  return (
    <div data-testid="detail-component" className="container">
      <div className="mt-5">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Detail;

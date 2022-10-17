import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/movies/card";
import { RootState } from "../../store";

const Detail = () => {
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
      <div className="row mt-5">
        {movies.length ? (
          movies.map((movie, i) => {
            return (
              <div
                key={movie.id}
                className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
              >
                <MovieCard {...movie} />;
              </div>
            );
          })
        ) : (
          <div className="container">
            <h4 className="text-light mb-5 p-5 border rounded border-light">
              Vaya, no hemos encontrado películas...
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;

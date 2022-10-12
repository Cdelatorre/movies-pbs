import React from "react";
import MovieCard from "../../components/movies/card/index.tsx";

const Home = () => {
  return (
    <div>
      <div className="container mt-5">
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

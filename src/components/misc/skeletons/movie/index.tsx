import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.scss";

const MovieSkeleton = () => {
  return (
    <div className="movie-skeleton col-lg-3 col-sm-6">
      <Skeleton
        className="card mb-3"
        baseColor="#ebebeb1c"
        highlightColor=" #27272740"
        height="300px"
      />
    </div>
  );
};

export default MovieSkeleton;

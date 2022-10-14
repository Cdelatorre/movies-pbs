import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieSkeleton = () => {
  return (
    <div className="col-lg-3 col-sm-6">
      <Skeleton
        className="movie-card card mb-3"
        baseColor="#ebebeb0a"
        highlightColor=" #27272740"
        height="300px"
      />
    </div>
  );
};

export default MovieSkeleton;

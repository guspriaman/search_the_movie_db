import React from 'react';

function MoviePopular({ movie }) {
  return (
    <div className="movie-item">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} poster`}
        className="movie-poster"
      />
      <h2 className="movie-title">{movie.title}</h2>
    </div>
  );
}

export default MoviePopular;

import React from 'react';

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;

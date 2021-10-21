import React, { useContext } from 'react';
import { getMoviePoster } from '../api/api';
import { MovieContext } from '../context/MovieContext';

const MovieList = () => {
  const { movies, setIsOpenModal, setSelectedMovieId } =
    useContext(MovieContext);

  const handleClick = (id: number) => {
    setSelectedMovieId(id);
    setIsOpenModal(true);
  };

  return (
    <div className="movie-list">
      {movies?.map((movie) => {
        const { poster_path, id, title, vote_average } = movie;
        return (
          <div className="movie-card" onClick={() => handleClick(id)}>
            {poster_path ? (
              <img
                className="movie-poster"
                src={getMoviePoster(poster_path)}
                alt="movie poster"
              />
            ) : (
              <div className="movie-title">{title}</div>
            )}
            <span className="movie-rating">⭐ {vote_average}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;


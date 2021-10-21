import React, { useContext, useEffect, useState } from 'react';
import './MovieDetails.css';
import { getMovieDetailsAndCast } from '../api/api';
import { MovieContext } from '../context/MovieContext';
import { MovieDetailsInterface } from '../types';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movieInfo, setMovieInfo] = useState<MovieDetailsInterface>();
  const { setIsOpenModal, selectedMovieId } = useContext(MovieContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(getMovieDetailsAndCast(selectedMovieId));
        if (!response.ok) {
          throw new Error(`Error! Response status: ${response.status}`);
        }
        const data = await response.json();
        setMovieInfo(data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    })();
  }, [selectedMovieId]);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <div className="modal-backdrop" />
      <div className="modal">
        <button onClick={() => setIsOpenModal(false)}>Close Modal</button>
        {movieInfo ? <h2>{movieInfo.title}</h2> : null}
        <p>{movieInfo?.overview}</p>
        <h3>Cast</h3>
        <div>
          {movieInfo?.credits.cast.reduce(
            (accum, person) => accum + `${person.name}, `,
            ''
          )}
        </div>
      </div>
    </>
  );
};



export default MovieDetails;

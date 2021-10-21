import React, { useContext, useEffect, useState } from 'react';
import './MovieDetails.css';
import { getMovieDetailsAndCast } from '../api/api';
import { MovieContext } from '../context/MovieContext';
import { MovieDetailsInterface } from '../types';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movieInfo, setMovieInfo] = useState<MovieDetailsInterface>();
  const { setIsOpenModal, selectedMovieId } = useContext(MovieContext);
  // console.log('cast', getMovieCast(selectedMovieId));
  // console.log('x', getMovieDetailsAndCast(selectedMovieId));
  // const { response, isLoading, error } = useFetch<IMovieDetails>(
  //   `${BASE_URL}/movie/${selectedMovieId}?api_key=de1b14bbc00f482ef90cce7ebe581bdd`
  // );
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

  // getMovieDetails(selectedMovieId);

  // useEffect(() => {
  //   console.log('response', response);
  // }, [response]);

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

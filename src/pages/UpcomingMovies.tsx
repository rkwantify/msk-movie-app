import React, { useEffect, useContext } from 'react';
import { getUpcomingMovies } from '../api/api';
import Modal from '../components/Modal';
import MovieDetails from '../components/MovieDetails';
import MovieList from '../components/MovieList';
import { MovieContext } from '../context/MovieContext';

const UpcomingMovies = () => {
  const { setMovies, isOpenModal, setIsLoading, isLoading } = useContext(MovieContext);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await fetch(getUpcomingMovies());
        const data = await response.json();
        setMovies(data.results);
        setIsLoading(false);
      } catch(error) {
        console.error(error);
        setIsLoading(false);
      }
    })();
  }, [setMovies, setIsLoading]);

  return (
    <>
      {isOpenModal ? (
        <Modal>
          <MovieDetails />
        </Modal>
      ) : null}
      {isLoading ? <h1>Loading...</h1> : <MovieList />}
    </>
  );
};

export default UpcomingMovies;



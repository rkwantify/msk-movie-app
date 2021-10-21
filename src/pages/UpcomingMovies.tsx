import React, { useEffect, useContext } from 'react';
import { getUpcomingMovies } from '../api/api';
import Modal from '../components/Modal';
import MovieDetails from '../components/MovieDetails';
import MovieList from '../components/MovieList';
import { MovieContext } from '../context/MovieContext';

const UpcomingMovies = () => {
  const { setMovies, isOpenModal, setIsLoading} = useContext(MovieContext);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await fetch(getUpcomingMovies());
        const data = await response.json();
        setMovies(data.results);

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
      <MovieList />
    </>
  );
};

export default UpcomingMovies;



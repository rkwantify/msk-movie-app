import React, { useContext, useEffect } from 'react';
import { getPopularMovies } from '../api/api';
import Modal from '../components/Modal';
import MovieDetails from '../components/MovieDetails';
import MovieList from '../components/MovieList';
import { MovieContext } from '../context/MovieContext';

const PopularMovies = () => {
  const { setMovies, isOpenModal, isLoading, setIsLoading} = useContext(MovieContext);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await fetch(getPopularMovies());
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

export default PopularMovies;

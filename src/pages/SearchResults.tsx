import React, { useContext } from 'react';
import Modal from '../components/Modal';
import MovieDetails from '../components/MovieDetails';
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import { MovieContext } from '../context/MovieContext';

const SearchResults = () => {
  const { isOpenModal, isLoading } = useContext(MovieContext);
  return (
    <main>
      {isOpenModal ? (
        <Modal>
          <MovieDetails />
        </Modal>
      ) : null}
      <Search />
      {isLoading ? <h1>Loading...</h1> : <MovieList />}
    </main>
  );
};

export default SearchResults;

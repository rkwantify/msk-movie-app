import React, { useState, createContext } from 'react';
import { MovieListResultsItem } from '../types';

interface MovieContextInterface {
  movies: MovieListResultsItem[] | undefined;
  setMovies: React.Dispatch<
    React.SetStateAction<MovieListResultsItem[] | undefined>
  >;
  selectedMovieId: number | undefined;
  setSelectedMovieId: React.Dispatch<React.SetStateAction<number | undefined>>;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MovieContext = createContext<MovieContextInterface>(
  {} as MovieContextInterface
);

export const MovieContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [movies, setMovies] = useState<MovieListResultsItem[]>();
  const [selectedMovieId, setSelectedMovieId] = useState<number | undefined>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const value = {
    movies,
    setMovies,
    selectedMovieId,
    setSelectedMovieId,
    isOpenModal,
    setIsOpenModal,
    isLoading,
    setIsLoading
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};


import React, { useState, useEffect, useCallback, useContext } from 'react';
import _debounce from 'lodash.debounce';
import './Search.css';
import { MovieContext } from '../context/MovieContext';
import { searchMovies } from '../api/api';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('x');
  const { setMovies, setIsLoading } = useContext(MovieContext);
  
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        if (searchQuery === '') return;
        const results = await fetch(
          searchMovies(searchQuery)
        );
        const data = await results.json();
        console.log(data.results);
        setMovies(data.results);
        setIsLoading(false);
      } catch(error) {
        console.error(error);
        setIsLoading(false);
      }
    })();
  }, [setIsLoading, searchQuery, setMovies]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // const debouncedHandleChange = useCallback(() => {
  //   _debounce(handleChange, 1000);
  // }, []);

  const debouncedHandleChange = useCallback(_debounce(handleChange, 500), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="search">
      <input className="search-input" onChange={debouncedHandleChange} />
    </div>
  );
};

export default Search;

const BASE_API_URL = 'https://api.themoviedb.org/3';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
// const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_KEY = 'de1b14bbc00f482ef90cce7ebe581bdd';

const generateURL = (path: string, params = {}) => {
  let searchParams = new URLSearchParams({ api_key: API_KEY + '', ...params });
  let queryString = searchParams.toString();
  return `${BASE_API_URL}${path}?${queryString}`;
};

export const getMovieDetailsAndCast = (id: number | undefined) => {
  return generateURL(`/movie/${id}`, { append_to_response: 'credits' });
};

export const searchMovies = (searchQuery: string) => {
  return generateURL(`/search/movie`, {query: searchQuery})
}
export const getMoviePoster = (posterPath: string) => {
  return `${BASE_IMAGE_URL}/w185${posterPath}`;
};

export const getUpcomingMovies = () => {
  return generateURL('/movie/upcoming');
};

export const getPopularMovies = () => {
  return generateURL('/movie/popular');
};

export const getMovieCast = (id: number | undefined) => {
  return generateURL(`/movie/${id}/credits`);
};

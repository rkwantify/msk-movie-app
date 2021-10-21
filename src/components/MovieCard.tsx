import { getMoviePoster } from '../api/api';
import './MovieCard.css';

interface MovieCardProps {
  posterPath: string | null;
  id: number | null;
  title: string;
  voteAverage: number;
}
const MovieCard = ({ posterPath, id, title, voteAverage }: MovieCardProps) => {
  // console.log(posterPath);
  // const IMAGE_URL = 'https://image.tmdb.org/t/p/w185';
  // console.log(`IMAGE_URL${posterPath}`);
  return (
    <div className="movie-card">
      {posterPath ? (
        <img
          className="movie-poster"
          src={getMoviePoster(posterPath)}
          alt={`${title} movie poster`}
        />
      ) : (
        <div className="movie-title">{title}</div>
      )}

      <span className="movie-rating">⭐ {voteAverage}</span>
      {/* <div className="overview">
        <h3>Overview</h3>
        Overview...
        <br />
        <button className="know-more" id="button-id8">
          Know More
        </button>
      </div> */}
    </div>
  );
};

export default MovieCard;

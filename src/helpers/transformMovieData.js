import defaultBackdrop from '../assets/images/default-backdrop.jpeg';
import defaultPoster from '../assets/images/default-movie-poster.jpeg';

export const transformMovieData = data => {
  const {
    id,
    imdb_id,
    original_language,
    original_title,
    overview,
    backdrop_path,
    poster_path,
    release_date,
    tagline,
    title,
    vote_average,
    runtime,
    genres,
  } = data;
  return {
    id,
    imdb_id,
    original_language,
    original_title,
    overview,
    backdrop_path: backdrop_path
      ? `https://image.tmdb.org/t/p/w300${backdrop_path}`
      : defaultBackdrop,
    poster_path: poster_path
      ? `https://image.tmdb.org/t/p/w300${poster_path}`
      : defaultPoster,
    // backdrop_path,
    // poster_path,
    release_date: release_date.slice(0, 4),
    tagline,
    title,
    vote_average,
    runtime,
    genres: genres.map(({ name }) => name).join(', '),
  };
};

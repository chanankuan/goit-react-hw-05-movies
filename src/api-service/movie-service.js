import axios from 'axios';
import { transformMovieData } from 'helpers';
import { options } from 'constants';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// get trending movies
export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    'trending/movie/day?language=en-US',
    options
  );

  return data.results;
};

// get movies by searching
export const getBySearchMovies = async (searchQuery, page) => {
  const { data } = await axios.get(
    `search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}`,
    options
  );

  return data;
};

// get reviews of a movie
export const getMovieDetails = async movie_id => {
  const { data } = await axios.get(`movie/${movie_id}?language=en-US`, options);

  const movie = transformMovieData(data);
  return movie;
};

// get reviews data
export const getReviewsDetails = async movie_id => {
  const { data } = await axios.get(
    `movie/${movie_id}/reviews?language=en-US`,
    options
  );

  return data.results;
};

// get cast list of a movie
export const getCastDetails = async movie_id => {
  const { data } = await axios.get(
    `movie/${movie_id}/credits?language=en-US`,
    options
  );

  return data.cast;
};

//get movie trailer
export const getMovieVideo = async movie_id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
    options
  );

  return data;
};

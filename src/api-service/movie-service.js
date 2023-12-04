import axios from 'axios';
import { transformMovieData } from 'helpers';
import { options } from 'constants';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );

  return data.results;
};

export const getBySearchMovies = async searchQuery => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=true&language=en-US&page=1`,
    options
  );

  return data.results;
};

export const getMovieDetails = async movie_id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
    options
  );

  const movie = transformMovieData(data);
  return movie;
};

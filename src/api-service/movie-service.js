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

export const getBySearchMovies = async (searchQuery, page = 1) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}`,
    options
  );

  console.log(data);
  return data;
};

export const getMovieDetails = async movie_id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
    options
  );

  const movie = transformMovieData(data);
  return movie;
};

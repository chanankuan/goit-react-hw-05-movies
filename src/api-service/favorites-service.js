import axios from 'axios';
// import { transformMovieData } from 'helpers';
import { options } from 'constants';

// get movie details by id
export const getMovieDetails = async movieIds => {
  const arrayOfPromises = movieIds.map(async movieId => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );

    return data;
  });

  const movies = await Promise.all(arrayOfPromises);
  return movies;
};

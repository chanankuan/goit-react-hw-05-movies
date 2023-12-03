import axios from 'axios';
import { options } from 'constants';

export const getReviewsDetails = async movie_id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US`,
    options
  );

  return data.results;
};

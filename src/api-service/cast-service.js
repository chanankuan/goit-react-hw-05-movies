import axios from 'axios';
import { options } from 'constants';

export const getCastDetails = async movie_id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`,
    options
  );

  return data.cast;
};

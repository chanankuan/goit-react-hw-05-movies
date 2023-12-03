import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'api-service/movie-service';

const MovieDetails = props => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getMovieDetails(id)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, [id]);

  console.log(movie);

  return <h1>MovieDetails</h1>;
};

MovieDetails.propTypes = {};

export default MovieDetails;

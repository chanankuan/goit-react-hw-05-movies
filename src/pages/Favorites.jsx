import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import addIcon from '../assets/images/circle-plus-solid.svg';
import { Container, Section } from 'components/Common';
import { getMovieDetails } from 'api-service/favorites-service';
import MovieList from 'components/MovieList/MovieList';

export const Favorites = () => {
  const [movies, setMovies] = useState([]);
  const [movieIds] = useState(
    JSON.parse(localStorage.getItem('movieIds')) || []
  );

  useEffect(() => {
    getMovieDetails(movieIds).then(data => setMovies(data));
  }, [movieIds]);

  return (
    <Section>
      {movieIds.length > 0 ? (
        <Container>
          <MovieList movies={movies} />
        </Container>
      ) : (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
          }}
        >
          <Container style={{ textAlign: 'center' }}>
            <h1 style={{ marginBottom: 10 }}>
              Your watchlist is looking a little empty...
            </h1>
            <Link
              to="/movies"
              style={{
                display: 'flex',
                justifyContent: 'center',
                columnGap: 10,
              }}
            >
              <img src={addIcon} alt="Add icon" /> Let's add some movies!
            </Link>
          </Container>
        </div>
      )}
    </Section>
  );
};

export default Favorites;

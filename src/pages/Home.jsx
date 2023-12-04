import React, { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import HomeTitle from 'components/Home/HomeTitle/HomeTitle';
import MovieList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { getTrendingMovies } from 'api-service/movie-service';
import { Container, Section } from 'components/Common';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies()
      .then(setMovies)
      .catch(() => {
        Notify.failure('Opps. Something went wrong. Please refresh the page');
      })
      .finally(setLoading(false));
  }, []);

  return (
    <Section>
      <Container>
        <HomeTitle />
        <MovieList movies={movies} path="movies/" />

        {loading && <Loader />}
      </Container>
    </Section>
  );
};

export default Home;

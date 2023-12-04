import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getTrendingMovies } from 'api-service/movie-service';
import { Container, Section } from 'components/Common';
import HomeTitle from 'components/Home/HomeTitle/HomeTitle';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies().then(setMovies).finally(setLoading(false));
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

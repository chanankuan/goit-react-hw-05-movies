import { Container, Section } from 'components/Common';
import SearchForm from 'components/Movies/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Title } from 'components/Movies/SearchForm/SearchForm.styled';
import { getBySearchMovies } from 'api-service/movie-service';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const movie = searchParams.get('query');
    if (!movie) return;

    setLoading(true);
    getBySearchMovies(movie).then(setMovies).catch(setLoading(false));
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query: query });
  };

  return (
    <>
      <Section>
        <Container>
          <Title>What do you want to watch?</Title>
          <SearchForm handleSubmit={handleSubmit} />

          <MovieList movies={movies} path="" />
          {loading && <Loader />}
        </Container>
      </Section>
    </>
  );
};

export default Movies;

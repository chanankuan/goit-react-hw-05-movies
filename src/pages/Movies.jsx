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
  const [noResults, setNoResults] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const movie = searchParams.get('query');
    if (!movie) return;

    setLoading(true);
    getBySearchMovies(movie)
      .then(data => {
        data.length === 0 ? setNoResults(true) : setNoResults(false);

        setMovies(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
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
          {noResults && <h2>No results. Please try another search.</h2>}
        </Container>
      </Section>
    </>
  );
};

export default Movies;

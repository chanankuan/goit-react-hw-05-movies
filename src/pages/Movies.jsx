import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Container, Section } from 'components/Common';
import SearchForm from 'components/Movies/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { Title } from 'components/Movies/SearchForm/SearchForm.styled';
import { getBySearchMovies } from 'api-service/movie-service';
import PaginationRounded from 'components/Pagination/Pagination';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const movie = searchParams.get('query');
    const page = searchParams.get('page') || 1;

    if (!movie) return;

    setLoading(true);
    getBySearchMovies(movie, page)
      .then(({ results, total_pages }) => {
        results.length === 0 ? setNoResults(true) : setNoResults(false);
        setMovies(results);
        setTotalPages(total_pages);
      })
      .catch(() => {
        Notify.failure('Opps. Something went wrong. Please refresh the page');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams]);

  const handleSubmit = query => {
    if (!query) return;
    setSearchParams({ query: query });
  };

  const handleChangePage = (_, newPage) => {
    const movie = searchParams.get('query');
    const page = searchParams.get('page');
    if (!page && newPage === 1) return;
    setSearchParams({ query: movie, page: newPage });
  };

  return (
    <>
      <Section>
        <Container>
          <Title>What do you want to watch?</Title>
          <SearchForm handleSubmit={handleSubmit} />

          <MovieList movies={movies} />
          {loading && <Loader />}
          {noResults && <h2>No results. Please try another search.</h2>}

          {totalPages > 1 && (
            <PaginationRounded
              totalPages={totalPages}
              handleChangePage={handleChangePage}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default Movies;

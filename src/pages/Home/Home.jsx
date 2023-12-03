import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FlexItem,
  MovieInfo,
  MovieItem,
  MovieList,
  MoviePoster,
  MovieRating,
  MovieTitle,
  MovieYear,
  SectionTitle,
  StyledContainer,
} from './Home.styled';
import star from '../../assets/images/star.svg';
import { Loader } from 'components/Loader/Loader';
import { getTrendingMovies } from 'api-service/movie-service';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies().then(setMovies).finally(setLoading(false));
  }, []);

  const location = useLocation();
  console.log(location);

  return (
    <>
      {loading && <Loader />}

      <section>
        <StyledContainer>
          <SectionTitle>
            <h2>Trending</h2>
            <div></div>
          </SectionTitle>
          <MovieList>
            {movies.map(
              ({
                id,
                title,
                original_title,
                release_date,
                poster_path,
                vote_average,
              }) => (
                <MovieItem key={id}>
                  <Link to={`movies/${id}`}>
                    <MoviePoster
                      src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                      alt={title}
                    />
                    <MovieInfo>
                      <MovieTitle>
                        {title === original_title
                          ? title
                          : `${original_title} (${title})`}
                      </MovieTitle>
                      <FlexItem>
                        <MovieYear>{release_date.slice(0, 4)}</MovieYear>
                        <MovieRating>
                          <img src={star} alt="" width={15} />
                          {vote_average === 0 ? '-' : vote_average.toFixed(1)}
                        </MovieRating>
                      </FlexItem>
                    </MovieInfo>
                  </Link>
                </MovieItem>
              )
            )}
          </MovieList>
        </StyledContainer>
      </section>
    </>
  );
};

Home.propTypes = {};

export default Home;

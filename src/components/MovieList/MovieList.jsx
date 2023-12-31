import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultPoster from '../../assets/images/default-movie-poster.jpeg';
import star from '../../assets/images/star.svg';
import player from '../../assets/images/player.svg';
import {
  FlexItem,
  List,
  MovieInfo,
  MovieItem,
  MoviePoster,
  MovieRating,
  MovieTitle,
  MovieYear,
  StyledLink,
  StyledPlayer,
} from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List name="movieList">
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
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <div style={{ position: 'relative' }}>
                <MoviePoster
                  className="poster"
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                      : defaultPoster
                  }
                  alt={title}
                />
                <StyledPlayer
                  className="player"
                  src={player}
                  alt="Player icon"
                />
              </div>
              <MovieInfo>
                <MovieTitle>
                  {title === original_title
                    ? title
                    : `${original_title} (${title})`}
                </MovieTitle>
                <FlexItem>
                  <MovieYear>
                    {release_date ? release_date.slice(0, 4) : '-'}
                  </MovieYear>
                  <MovieRating>
                    <img src={star} alt="Star icon" width={15} />
                    {vote_average ? vote_average.toFixed(1) : '-'}
                  </MovieRating>
                </FlexItem>
              </MovieInfo>
            </StyledLink>
          </MovieItem>
        )
      )}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(Object),
};

export default MovieList;

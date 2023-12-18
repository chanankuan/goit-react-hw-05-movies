import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import arrowLeft from '../../../assets/images/arrow-left.svg';
import calendar from '../../../assets/images/calendar.svg';
import clock from '../../../assets/images/clock.svg';
import genre from '../../../assets/images/ticket.svg';
import addIcon from '../../../assets/images/circle-plus-solid.svg';
import deleteIcon from '../../../assets/images/circle-minus-solid.svg';
import {
  Accent,
  DetailsItem,
  DetailsList,
  GoBack,
  Icon,
  MovieInfo,
  MovieItem,
  MoviePoster,
  MovieTitle,
  Overview,
  StyledButton,
} from './Body.styled';
import { Container, Section } from 'components/Common';

const Body = ({
  movieId,
  backLinkHref,
  poster,
  title,
  release_date,
  runtime,
  genres,
  vote_average,
  overview,
}) => {
  const [savedMovieIds, setSavedMovieIds] = useState(
    JSON.parse(localStorage.getItem('movieIds')) || []
  );

  const [isSaved, setIsSaved] = useState(
    savedMovieIds.some(id => id === movieId)
  );

  useEffect(() => {
    localStorage.setItem('movieIds', JSON.stringify(savedMovieIds));
  }, [savedMovieIds]);

  const handleAddMovie = movieId => {
    console.log('handle add: ' + movieId);
    setSavedMovieIds(prevState => [...prevState, movieId]);
    setIsSaved(prevState => !prevState);
  };

  const handleDeleteMovie = movieId => {
    console.log('handle delete: ' + movieId);
    setSavedMovieIds(prevState => prevState.filter(id => id !== movieId));
    setIsSaved(prevState => !prevState);
  };

  return (
    <Section>
      <Container>
        <GoBack to={backLinkHref}>
          <img src={arrowLeft} alt="Go back" width={16} /> Go back
        </GoBack>
        <MovieItem>
          <MoviePoster src={poster} alt={title} />
          <MovieInfo>
            <MovieTitle>{title}</MovieTitle>
            <DetailsList>
              <DetailsItem>
                <Icon src={calendar} alt="Calendar icon" />
                <Accent>{release_date}</Accent>
              </DetailsItem>
              <DetailsItem>
                <Icon src={clock} alt="Clock icon" />
                <Accent>{runtime} Minutes</Accent>
              </DetailsItem>
              <DetailsItem>
                <Icon src={genre} alt="Ticket icon" />
                <Accent>{genres}</Accent>
              </DetailsItem>
            </DetailsList>
            <StyledButton
              type="button"
              onClick={() =>
                isSaved ? handleDeleteMovie(movieId) : handleAddMovie(movieId)
              }
            >
              <img
                src={isSaved ? deleteIcon : addIcon}
                alt={`${isSaved ? 'Delete' : 'Add'} icon`}
              />
              Watchlist
            </StyledButton>
            <Overview>
              User score:{' '}
              {Number.isInteger(vote_average * 10)
                ? (vote_average * 10).toString()
                : (vote_average * 10).toFixed(1)}
              %
            </Overview>
            <Overview>{overview}</Overview>
          </MovieInfo>
        </MovieItem>
      </Container>
    </Section>
  );
};

Body.propTypes = {
  backLinkHref: PropTypes.any,
  poster: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  runtime: PropTypes.number,
  genres: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
};

export default Body;

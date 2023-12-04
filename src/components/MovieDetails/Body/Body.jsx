import React from 'react';
import PropTypes from 'prop-types';
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
} from './Body.styled';
import arrowLeft from '../../../assets/images/arrow-left.svg';
import calendar from '../../../assets/images/calendar.svg';
import clock from '../../../assets/images/clock.svg';
import genre from '../../../assets/images/ticket.svg';

const Body = ({
  backLinkHref,
  poster,
  title,
  release_date,
  runtime,
  genres,
  vote_average,
  overview,
}) => {
  return (
    <>
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
          <Overview>User score: {vote_average * 10}%</Overview>
          <Overview>{overview}</Overview>
        </MovieInfo>
      </MovieItem>
    </>
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

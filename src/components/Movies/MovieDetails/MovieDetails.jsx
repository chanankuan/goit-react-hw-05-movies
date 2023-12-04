import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'api-service/movie-service';
import {
  Accent,
  Backdrop,
  DetailsItem,
  DetailsList,
  GoBack,
  Icon,
  InfoTitle,
  MovieInfo,
  MovieItem,
  MoviePoster,
  MovieTitle,
  Nav,
  Overview,
  StyledContainer,
  StyledNavLink,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';
import arrowLeft from '../../../assets/images/arrow-left.svg';
import player from '../../../assets/images/player.svg';
import calendar from '../../../assets/images/calendar.svg';
import clock from '../../../assets/images/clock.svg';
import genre from '../../../assets/images/ticket.svg';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieDetails(movieId).then(setMovie).finally(setLoading(false));
  }, [movieId]);

  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    runtime,
    overview,
    genres,
  } = movie;

  return (
    <>
      {loading && <Loader />}
      <section>
        <Backdrop backdrop={backdrop_path}>
          {/* <Background imageUrl={backdrop_path} /> */}
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            rel="noreferrer"
            target="_blank"
          >
            <img src={player} alt="Player icon" />
          </a>
        </Backdrop>
      </section>
      <StyledContainer>
        <GoBack to="/">
          <img src={arrowLeft} alt="Go back" width={16} /> Go back
        </GoBack>
        <MovieItem>
          <MoviePoster src={poster_path} alt={title} />
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
            <Overview>{overview}</Overview>
          </MovieInfo>
        </MovieItem>

        <InfoTitle>Additional information</InfoTitle>
        <Nav>
          <StyledNavLink to="cast">Cast</StyledNavLink>
          <StyledNavLink to="reviews">Reviews</StyledNavLink>
        </Nav>
        <Outlet />
      </StyledContainer>
    </>
  );
};

export default MovieDetails;

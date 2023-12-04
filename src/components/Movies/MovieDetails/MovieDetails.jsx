import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'api-service/movie-service';
import { Loader } from 'components/Loader/Loader';
import arrowLeft from '../../../assets/images/arrow-left.svg';
import player from '../../../assets/images/player.svg';
import calendar from '../../../assets/images/calendar.svg';
import clock from '../../../assets/images/clock.svg';
import genre from '../../../assets/images/ticket.svg';
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
import BasicModal from 'components/Modal/Modal';
import { Button, Section } from 'components/Common';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home';

  useEffect(() => {
    setLoading(true);
    getMovieDetails(movieId).then(setMovie).finally(setLoading(false));
  }, [movieId]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    runtime,
    overview,
    genres,
    vote_average,
  } = movie;

  return (
    <>
      {loading && <Loader />}
      <Section>
        <Backdrop backdrop={backdrop_path}>
          <Button type="button" onClick={handleOpen}>
            <img src={player} alt="Player icon" />
          </Button>
        </Backdrop>
      </Section>
      <StyledContainer>
        <GoBack to={backLinkHref}>
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
            <Overview>User score: {vote_average * 10}%</Overview>
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

      <BasicModal handleClose={handleClose} open={open} />
    </>
  );
};

export default MovieDetails;

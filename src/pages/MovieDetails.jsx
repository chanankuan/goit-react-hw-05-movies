import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails, getMovieVideo } from 'api-service/movie-service';
import { Loader } from 'components/Loader/Loader';
import Backdrop from 'components/MovieDetails/Backdrop/Backdrop';
import BasicModal from 'components/Modal/Modal';
import { Container, Section } from 'components/Common';
import Body from 'components/MovieDetails/Body/Body';
import AdditionalInfo from 'components/MovieDetails/AdditionalInfo/AdditionalInfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [videoKey, setVideoKey] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home';

  useEffect(() => {
    setLoading(true);
    getMovieDetails(movieId).then(setMovie).finally(setLoading(false));
    getMovieVideo(movieId)
      .then(obj => setVideoKey(obj.key))
      .catch(() => {
        setVideoKey('Q5RsQWm3rOY?&amp;start=45');
      });
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
  } = movie || {};

  return (
    <>
      {loading && <Loader />}

      {movie && (
        // <Container>
        <>
          <Backdrop imgUrl={backdrop_path} handleOpen={handleOpen} />
          <Body
            backLinkHref={backLinkHref}
            poster={poster_path}
            title={title}
            release_date={release_date}
            runtime={runtime}
            genres={genres}
            vote_average={vote_average}
            overview={overview}
          />
          <AdditionalInfo />
          <Outlet />
          <BasicModal
            handleClose={handleClose}
            open={open}
            videoKey={videoKey}
          />
        </>
        // </Container>
      )}
    </>
  );
};

export default MovieDetails;

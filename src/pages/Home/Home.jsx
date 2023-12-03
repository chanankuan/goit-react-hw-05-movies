import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import { getTrending } from 'api-service/trending-service';
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

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTrending()
      .then(response => response.json())
      .then(data => setData(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Header />
      {!data.length && 'Loading...'}

      <section>
        <StyledContainer>
          <SectionTitle>
            <h2>Trending</h2>
            <div></div>
          </SectionTitle>
          <MovieList>
            {data.map(
              ({
                id,
                original_title,
                release_date,
                poster_path,
                vote_average,
              }) => (
                <MovieItem key={id}>
                  <Link to={`movies/${id}`}>
                    <MoviePoster
                      src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                      alt={original_title}
                    />
                    <MovieInfo>
                      <MovieTitle>{original_title}</MovieTitle>
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

// adult: false;
// backdrop_path: '/sp6egj5NHHRGmCMdIoTNdbLwACR.jpg';
// genre_ids: (3)[(35, 14, 10751)];
// id: 1022964;
// media_type: 'movie';
// original_language: 'en';
// original_title: 'Candy Cane Lane';
// overview: "A man, determined to win the neighborhood's annual Christmas decorating contest, makes a pact with an elf to help him win. However, the elf casts a spell bringing the twelve days of Christmas to life, bringing chaos to the small, unsuspecting town.";
// popularity: 98.281;
// poster_path: '/qQLC8iFicw1vVVbGMyyZzeghC4w.jpg';
// release_date: '2023-11-29';
// title: 'Candy Cane Lane';
// video: false;
// vote_average: 6.597;
// vote_count: 31;

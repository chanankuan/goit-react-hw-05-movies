import React from 'react';
// import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

const Movies = props => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

Movies.propTypes = {};

export default Movies;

import Home from 'pages/Home';
import Cast from 'components/Movies/Cast/Cast';
import MovieDetails from 'components/Movies/MovieDetails/MovieDetails';
import Movies from 'pages/Movies';
import Reviews from 'components/Movies/Reviews/Reviews';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

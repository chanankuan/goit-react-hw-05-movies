import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ScrollTopButton from './ScrollTopButton/ScrollTopButton';
const Home = lazy(() => import('pages/Home'));
const Cast = lazy(() => import('components/Movies/Cast/Cast'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));
const Favorites = lazy(() => import('pages/Favorites'));
const Reviews = lazy(() => import('components/Movies/Reviews/Reviews'));
const Layout = lazy(() => import('components/Layout/Layout'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="/favorites" element={<Favorites />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>

      <ScrollTopButton />
    </>
  );
};

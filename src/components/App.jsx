import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
const Home = lazy(() => import('pages/Home'));
const Cast = lazy(() => import('components/Movies/Cast/Cast'));
const MovieDetails = lazy(() =>
  import('components/Movies/MovieDetails/MovieDetails')
);
const Movies = lazy(() => import('pages/Movies'));
const Reviews = lazy(() => import('components/Movies/Reviews/Reviews'));
const Layout = lazy(() => import('components/Layout/Layout'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

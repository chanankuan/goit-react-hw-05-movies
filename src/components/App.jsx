import Home from 'pages/Home/Home';
import MovieDetails from 'pages/Movies/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

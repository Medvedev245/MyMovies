import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
// import AboutUs from 'pages/AboutUs/AboutUs';
// import Contacts from 'pages/Contacts/Contacts';

const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const AboutUs = lazy(() => import('../../pages/AboutUs/AboutUs'));
const Home = lazy(() => import('../../pages/Home/Home'));
const SearchMovie = lazy(() => import('../../pages/Search/Search'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const NotFound = lazy(() => import('../../pages/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<SearchMovie />} />
        <Route path="movies/:movieId/" element={<MovieDetails />}>
          <Route path="casts" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="about" element={<AboutUs />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

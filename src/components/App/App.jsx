// import Home from 'Pages/Home/Home';
import { lazy } from 'react';
import MovieDetails from '../../Pages/MovieDetails/MovieDetails';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const Home = lazy(() => import('../../Pages/Home/Home'));
// const SearchMovie = lazy(() => import('../pages/Search/Search'));
// const MoviesDetails = lazy(() => import('../pages/MovieDetails/MoviesDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
// const NotFound = lazy(() => import('../pages/NotFound'));

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="/movies/:movieId" element={<MovieDetails />} />
//         {/* <Route path="cast" element={ <Cast/> } />
//           <Route path="reviews" element={ <Reviews />} /> */}
//         <Route path="/movies" element={<div>WordSerch</div>} />
//       </Route>
//     </Routes>
//   );
// };

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="cast" element={<Cast />} /> */}
          {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        {/* <Route path="movies" element={ <SearchMovie /> } /> */}
        {/* <Route path="movies/:movieId" element={ <MoviesDetails /> } > */}
        {/* <Route path="cast" element={ <Cast/> } /> */}
        {/* <Route path="reviews" element={ <Reviews />} /> */}
        {/* </Route> */}
      </Route>
      {/* <Route path='*' element={ <NotFound/>} /> */}
    </Routes>
  );
};

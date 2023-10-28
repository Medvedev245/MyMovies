// export const SelectedMovie = ({
//   SelectedMovie: { poster_path, title, vote_average, overview },
//   genres,
// }) => {
//   return (
//     <div>
//       <p>hi</p>
//     </div>
//   );
// return (
//     <Routes>
//       <Route path="/" element={ <Layout /> }>
//         <Route index element={ <Home /> } />
//         <Route path=":movieId" element={ <MoviesDetails /> }>
//           <Route path="cast" element={ <Cast/> } />
//           <Route path="reviews" element={ <Reviews />} />
//         </Route>
// <Route path="movies" element={ <SearchMovie /> } />
// <Route path="movies/:movieId" element={ <MoviesDetails /> } >
//           <Route path="cast" element={ <Cast/> } />
//           <Route path="reviews" element={ <Reviews />} />
//         </Route>
//       </Route>
//   <Route path='*' element={ <NotFound/>} />
// </Routes>
//   );

// };

export const SelectedMovie = ({ selecteMovie, genres }) => {
  // export const SelectedMovie = props => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w400';
  //   console.log(imgBaseUrl + selecteMovie.poster_path);
  //   console.log(selecteMovie.poster_path);

  return (
    <div>
      <div>
        <img
          src={imgBaseUrl + selecteMovie.poster_path}
          alt={selecteMovie.title}
        />
      </div>
      <div>
        <p>{selecteMovie.title}</p>
        <span>
          User score:{' '}
          {selecteMovie.vote_average
            ? selecteMovie.vote_average.toFixed(1)
            : 'N/A'}
          %
        </span>
        <span>Overview</span>
        <p>{selecteMovie.overview}</p>
      </div>
      <div>
        <p>Additional Information</p>
      </div>
    </div>
  );
};

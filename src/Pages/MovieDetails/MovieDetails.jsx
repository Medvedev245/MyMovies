// import { fetchOneMovie } from '../../components/API';
// import { SelectedMovie } from 'components/SelectedMovie/SelectedMovie';
// import { useEffect, useRef, useState } from 'react';
// import { useParams, useLocation, Link } from 'react-router-dom';

// const MovieDetails = () => {
//   const [selecteMovie, setselecteMovie] = useState();
//   const [genres, setGenres] = useState([]);

//   const { movieId } = useParams();
//   const location = useLocation();
//   const backLink = useRef(location.state?.from ?? '/movies');

//   useEffect(() => {
//     const selectedMovie = async () => {
//       try {
//         const movie = await fetchOneMovie(movieId);
//         setselecteMovie(movie);
//         setGenres([...movie.genres]);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     selectedMovie();
//   }, [movieId]);

//   return (
//     <section>
//       <Link to={backLink.current}>Back</Link>
//       <div>
//         <SelectedMovie selecteMovie={selecteMovie} genres={genres} />
//       </div>
//     </section>
//   );
// };

// export default MovieDetails;
import { fetchOneMovie } from '../../components/API';
import { SelectedMovie } from 'components/SelectedMovie/SelectedMovie';
import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

const MovieDetails = () => {
  const [selecteMovie, setselecteMovie] = useState();
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const result = async () => {
      try {
        const movie = await fetchOneMovie(movieId);
        if (movie) {
          setselecteMovie(movie);
          setGenres(movie.genres);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  const prevLocation = useRef(location.state?.from);

  return (
    <>
      {selecteMovie && (
        <>
          <Link to={prevLocation ? prevLocation : '/'} className="buttonLink">
            Go back
          </Link>
          <SelectedMovie movie={selecteMovie} genres={genres} />
        </>
      )}
    </>
  );
};

export default MovieDetails;

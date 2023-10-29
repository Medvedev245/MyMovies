export const SelectedMovie = props => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w400';
  console.log(props);

  return (
    <div>
      {/* <div>
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
      </div> */}
      <div>
        <p>Additional Information</p>
      </div>
    </div>
  );
};

// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import {
//   Wrapper,
//   Img,
//   WrapperDetails,
//   Title,
//   Description,
//   AddInfoWrapper,
//   AddInfoList,
//   LinkInfo,
// } from './SelectedMovie.styled';

// export const SelectedMovie = ({
//   items: { poster_path, title, vote_average, overview },
//   genres,
// }) => {
//   const imgBaseUrl = 'https://image.tmdb.org/t/p/w400';

//   return (
//     <Wrapper>
//       <WrapperDetails>
//         <div>
//           <Img src={imgBaseUrl + poster_path} alt={title} />
//         </div>

//         <div>
//           <Title>{title}</Title>
//           <Description>
//             User score: {vote_average ? vote_average.toFixed(1) : 'N/A'}%
//           </Description>
//           <Title>Overview</Title>
//           <Description>{overview}</Description>
//           <Title>Genres</Title>
//           <div>
//             {genres.map(genre => {
//               return <Description key={genre.id}>{genre.name}</Description>;
//             })}
//           </div>
//         </div>
//       </WrapperDetails>

//       <AddInfoWrapper>
//         <Title>Additional Information</Title>
//         <AddInfoList>
//           <li>
//             <LinkInfo to="cast">Cast</LinkInfo>
//           </li>
//           <li>
//             <LinkInfo to="reviews">Reviews</LinkInfo>
//           </li>
//         </AddInfoList>
//       </AddInfoWrapper>

//       <Suspense fallback={<div>Loadind...</div>}>
//         <Outlet />
//       </Suspense>
//     </Wrapper>
//   );
// };

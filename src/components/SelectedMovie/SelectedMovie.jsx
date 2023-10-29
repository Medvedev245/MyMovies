export const SelectedMovie = props => {
  // const imgBaseUrl = 'https://image.tmdb.org/t/p/w400';
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

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=5be1c9c05ef299ccfab1d8ad724f7561';

// search all movies
export const fetchAllMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day${API_KEY}`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4',
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

// search movie by ID
export const fetchOneMovie = async id => {
  try {
    const response = await axios.get(`movie/${id}?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// search by cast
export const fetchCast = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4',
      },
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

// search by review
export const fetchReviews = async id => {
  try {
    const response = await axios.get(
      `/movie/${id}/reviews?language=en-US&page=1`,
      {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4',
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

// fetch By Query
export const fetchByQuery = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
      {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

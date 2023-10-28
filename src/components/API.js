import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=5be1c9c05ef299ccfab1d8ad724f7561';

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
// https://api.themoviedb.org/3/trending/movie/day?api_key=7f6cfc769c2057b00f9c41481e14f95f

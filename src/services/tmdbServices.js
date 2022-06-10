import axios from "axios";
const API_KEY = "?api_key=" + process.env.REACT_APP_TMDB_KEY;
const API_PATH = "https://api.themoviedb.org/3";

export const fetchMovies = async (page) => {
  const response = await axios.get(
    `${API_PATH}/discover/movie${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
  );
  return response.data.results;
};

export const fetchGenres = async () => {
  const response = await axios.get(
    `${API_PATH}/genre/movie/list${API_KEY}&language=en-US`
  );
  return response.data.genres;
};

export const fetchOneMovie = async (movieId) => {
  const response = await axios.get(
    `${API_PATH}/movie/${movieId}${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchSimilarMovies = async (movieId) => {
  const response = await axios.get(
    `${API_PATH}/movie/${movieId}/similar${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};

export const fetchWatchProviders = async (movieId) => {
  const response = await axios.get(
    `${API_PATH}/movie/${movieId}/watch/providers${API_KEY}`
  );
  return response.data.results.US.flatrate;
};

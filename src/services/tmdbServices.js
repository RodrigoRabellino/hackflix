import axios from "axios";
const API_KEY = "?api_key=" + process.env.REACT_APP_TMDB_KEY;
let page = 1;

export const fetchMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
  );
  page++;
  return response.data.results;
};

export const fetchGenres = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list${API_KEY}&language=en-US`
  );
  return response.data.genres;
};

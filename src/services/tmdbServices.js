import axios from "axios";
const API_KEY = "?api_key=" + process.env.REACT_APP_TMDB_KEY;
const API_PATH = "https://api.themoviedb.org/3";

export const URL_POSTER_FULL = "https://image.tmdb.org/t/p/original/";
export const URL_BACK_LOW = "https://image.tmdb.org/t/p/w500";

export const fetchMovies = async (page) => {
  try {
    const response = await axios.get(
      `${API_PATH}/discover/movie${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
    return response.data.results;
  } catch (error) {
    console.log("errorFetchMovies", error);
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(
      `${API_PATH}/genre/movie/list${API_KEY}&language=en-US`
    );
    return response.data.genres;
  } catch (error) {
    console.log("errorFetchGenres", error);
  }
};

export const fetchGenresInMovie = async (movie_genres) => {
  try {
    let genresInMovie = [];
    const response = await axios.get(
      `${API_PATH}/genre/movie/list${API_KEY}&language=en-US`
    );

    for (let i = 0; i < movie_genres.length; i++) {
      let resp = response.data.genres.find(
        (genre) => genre.id === movie_genres[i]
      );
      genresInMovie.push(resp);
    }

    return genresInMovie;
  } catch (error) {
    console.log("errorFetchGenres", error);
  }
};

export const fetchOneMovie = async (movieId) => {
  try {
    const response = await axios.get(
      `${API_PATH}/movie/${movieId}${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log("errorFetchOneMovie", error);
  }
};

export const fetchSimilarMovies = async (movieId) => {
  try {
    const response = await axios.get(
      `${API_PATH}/movie/${movieId}/similar${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.log("errorFetchSimilarMovies", error);
  }
};

export const fetchWatchProviders = async (movieId) => {
  try {
    const response = await axios.get(
      `${API_PATH}/movie/${movieId}/watch/providers${API_KEY}`
    );
    return response.data.results.US;
  } catch (error) {
    console.log("errorFetchWatchProviders", error);
    return [];
  }
};

export const fetchMovieByQuery = async (movieQuery, page) => {
  try {
    const response = await axios.get(
      `${API_PATH}/search/multi/${API_KEY}&page=${page}&query=${movieQuery}`
    );
    return response.data.results;
  } catch (error) {
    console.log("errorFetchMovieByQuery", error);
  }
};

import { useState, useEffect } from "react";
import { colors, Skeleton } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useParams } from "react-router-dom";
import {
  fetchOneMovie,
  fetchSimilarMovies,
  fetchWatchProviders,
} from "../../../services/tmdbServices";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [provider, setProvider] = useState([]);
  const [similarMovies, setSimilarMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      setMovie(await fetchOneMovie(movieId));
    };
    const getProvider = async () => {
      setProvider(await fetchWatchProviders(movieId));
    };
    const getSimilarMovies = async () => {
      setSimilarMovie(await fetchSimilarMovies(movieId));
    };
    getMovie();
    getProvider();
    getSimilarMovies();
  }, [movieId]);

  const { poster_path, title } = movie;
  const posterPath = "https://image.tmdb.org/t/p/w500" + poster_path;
  return (
    <Container>
      {Object.entries(movie).length === 0 ? (
        <MovieSkeleton />
      ) : (
        <Box>
          <img
            srcSet={posterPath}
            alt={`${title} poster`}
            className="movie-details-img"
          />
        </Box>
      )}
    </Container>
  );
};

const MovieSkeleton = () => {
  return (
    <Box>
      <Skeleton
        variant="rectangular"
        width="80%"
        height="200px"
        animation="wave"
        sx={{
          bgcolor: colors.blueGrey[200],
        }}
      />
      <Skeleton
        variant="rectangular"
        width="600px"
        height="300px"
        sx={{
          bgcolor: colors.blueGrey[800],
          paddin: "1rem",
          borderRadius: "15px",
        }}
      />
    </Box>
  );
};

export default MovieDetails;

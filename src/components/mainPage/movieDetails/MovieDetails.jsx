import { useState, useEffect } from "react";
import { colors, Paper, Skeleton, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useParams } from "react-router-dom";
import {
  fetchOneMovie,
  fetchSimilarMovies,
  fetchWatchProviders,
} from "../../../services/tmdbServices";
import "./movieDetails.css";

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

  console.log(movie);
  console.log(provider);

  const { poster_path, title, overview, release_date, backdrop_path } = movie;
  const posterPath = "https://image.tmdb.org/t/p/w500" + poster_path;
  const backImgPath = "https://image.tmdb.org/t/p/w500" + backdrop_path;
  return (
    <Box>
      {Object.entries(movie).length === 0 ? (
        <MovieSkeleton />
      ) : (
        <Box
          width="100%"
          height="100vh"
          position="relative"
          text-align="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <img
            srcSet={backImgPath}
            alt={`${title} poster`}
            className="movie-details-img"
          />
          <Box
            display="flex"
            flexDirection="column"
            position="absolute"
            width="100%"
            height="100%"
          >
            <Paper
              sx={{
                boxShadow: "0 0 15px 20px white",
                padding: "1rem",
                paddingBottom: "5rem",
              }}
            >
              <Typography variant="h4">{title}</Typography>
              <Typography variant="body2">{release_date}</Typography>
              <Typography>{overview}</Typography>
            </Paper>
          </Box>
        </Box>
      )}
    </Box>
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

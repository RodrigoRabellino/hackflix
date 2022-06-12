import { useState, useEffect } from "react";
import {
  colors,
  IconButton,
  Paper,
  Skeleton,
  Typography,
  Box,
} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import {
  fetchOneMovie,
  fetchSimilarMovies,
  fetchWatchProviders,
} from "../../../services/tmdbServices";
import "./movieDetails.css";
import Carousel from "../genresPage/carousel/Carousel";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [showMore, setShowMore] = useState(false);
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
  }, []);

  console.log("similar", similarMovies);
  const { title, overview, release_date, backdrop_path } = movie;
  const backImgPath = "https://image.tmdb.org/t/p/w500" + backdrop_path;
  return (
    <Box overflow="hidden">
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
            sx={{
              transition: "0.9s",
            }}
            display="flex"
            flexDirection="column"
            position="absolute"
            width="100%"
            height="100%"
            justifyContent="flex-end"
          >
            <Paper
              sx={{
                transition: "0.9s",
                boxShadow: showMore ? "none" : "0 0 15px 20px white",
                padding: "1rem",
                paddingBottom: "1.5rem",
                borderRadius: "0",
              }}
            >
              <Box display="flex" onClick={() => setShowMore(!showMore)}>
                <Typography variant="h4">{title}</Typography>
                <IconButton>
                  {showMore ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                </IconButton>
              </Box>
              <Typography>{overview}</Typography>
              <Box
                sx={{
                  transition: "0.2s",
                }}
                height={showMore ? "1px" : "200px"}
              >
                <Typography>Similar</Typography>
                <Carousel movies={similarMovies} />
              </Box>
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

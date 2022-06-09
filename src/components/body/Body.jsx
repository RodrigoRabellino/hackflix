import {
  Container,
  Box,
  Rating,
  Paper,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { Cached, Star } from "@mui/icons-material";
import { useState, useEffect } from "react";
// import moviesJSON from "../../services/movies.json";
import MovieCard from "./movieCard/MovieCard";
import { fetchMovies, fetchGenres } from "../../services/tmdbServices";

const Body = () => {
  const [movies, setMovies] = useState([]);
  const [ratingSearch, setRating] = useState(0);
  const [moviesJSON, setMoviesJSON] = useState([]);
  const [genresList, setGenres] = useState([]);

  const handleSetRating = (newValue) => {
    setRating(newValue);
  };

  const handleRefresh = () => {
    setRating(0);
  };

  useEffect(() => {
    const searchGenres = async () => {
      const resp = await fetchGenres();
      setGenres([...resp]);
    };
    searchGenres();
  }, []);

  useEffect(() => {
    const searchMovies = async () => {
      const resp = await fetchMovies();
      setMoviesJSON((prevState) => [...prevState, ...resp]);
    };
    searchMovies();
  }, []);

  useEffect(() => {
    if (ratingSearch === 0) return setMovies([...moviesJSON]);
    setMovies(
      moviesJSON.filter(
        (movie) => Math.floor(movie.vote_average / 2) + 1 >= ratingSearch
      )
    );
  }, [ratingSearch, moviesJSON]);

  return (
    <Container sx={{ marginTop: "0.65rem", padding: "0.65rem" }}>
      <Box position="sticky" top="65px" zIndex="9999">
        <Paper
          sx={{
            display: "flex",
            padding: "0.65rem",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Search by: </Typography>
          <Rating
            value={ratingSearch}
            precision={0.2}
            icon={<Star color="primary" />}
            onChange={(e, newValue) => handleSetRating(newValue)}
          />
          <IconButton onClick={() => handleRefresh()}>
            <Cached />
          </IconButton>
          {ratingSearch === 0 ? null : (
            <Typography> Rating Selected: {ratingSearch * 2} </Typography>
          )}
        </Paper>
      </Box>
      <Container sx={{ width: "100%", marginTop: "1.5rem" }}>
        <Grid container justifyContent="center" spacing={2}>
          {movies.map((movie) => {
            return (
              <MovieCard movie={movie} key={movie.id} genres={genresList} />
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
};

export default Body;

// if (ratingAverage >= 8)
//       return setMovies(moviesJSON.filter((movie) => movie.vote_average >= 8));

//     if (ratingAverage <= 8 && ratingAverage >= 6)
//       return setMovies(
//         moviesJSON.filter(
//           (movie) => movie.vote_average <= 6 && movie.vote_average >= 4
//         )
//       );

//     if (ratingAverage <= 6 && ratingAverage >= 4)
//       return setMovies(
//         moviesJSON.filter(
//           (movie) => movie.vote_average <= 6 && movie.vote_average >= 4
//         )
//       );

//     if (ratingAverage <= 4 && ratingAverage >= 2)
//       return setMovies(
//         moviesJSON.filter(
//           (movie) => movie.vote_average <= 4 && movie.vote_average >= 2
//         )
//       );

//     if (ratingAverage < 2)
//       return setMovies(moviesJSON.filter((movie) => movie.vote_average <= 2));

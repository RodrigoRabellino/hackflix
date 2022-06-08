import {
  Container,
  Box,
  Rating,
  Paper,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { Cached } from "@mui/icons-material";
import { useState, useEffect } from "react";
import moviesJSON from "../../services/movies.json";
import MovieCard from "./movieCard/MovieCard";

const Body = () => {
  const [movies, setMovies] = useState([]);
  const [ratingSearch, setRating] = useState(0);

  const handleSetRating = (newValue) => {
    setRating(newValue);
    console.log(ratingSearch);
  };

  const handleRefresh = () => {
    setRating(0);
  };

  useEffect(() => {
    if (ratingSearch !== 0) {
      return setMovies(
        moviesJSON.filter((movie) => movie.vote_average <= ratingSearch * 2)
      );
    }
    setMovies([...moviesJSON]);
  }, [ratingSearch]);

  return (
    <Container sx={{ marginTop: "0.65rem", padding: "0.65rem" }}>
      <Box>
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
            onChange={(e, newValue) => handleSetRating(newValue)}
          />
          <IconButton onClick={() => handleRefresh()}>
            <Cached />
          </IconButton>
        </Paper>
      </Box>
      <Container sx={{ width: "100%", marginTop: "1.5rem" }}>
        <Grid container spacing={2}>
          {movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </Grid>
      </Container>
    </Container>
  );
};

export default Body;

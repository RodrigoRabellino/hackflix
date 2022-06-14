import { useState, useEffect } from "react";
import { Cached, Star } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { fetchGenres, fetchMovies } from "../../../../services/tmdbServices";
import LoadingSkeleton from "../loadingSkeleton/LoadingSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../movieCard/MovieCard";

const RatingSearch = () => {
  const [movies, setMovies] = useState([]);
  const [ratingSearch, setRating] = useState(0);
  const [moviesJSON, setMoviesJSON] = useState([]);
  const [genresList, setGenres] = useState([]);
  const [tmdbPage, setTmdbPage] = useState(1);

  const handleSetRating = (newValue) => {
    setRating(newValue);
  };

  const handleRefresh = () => {
    setRating(0);
  };

  const handleNextPage = () => {
    setTmdbPage(tmdbPage + 1);
  };
  //fetching genres
  useEffect(() => {
    const searchGenres = async () => {
      const resp = await fetchGenres();
      setGenres([...resp]);
    };
    searchGenres();
  }, []);
  //fetching discover movies first time and when user scroll down
  useEffect(() => {
    const searchMovies = async () => {
      const resp = await fetchMovies(tmdbPage);
      setMoviesJSON((prevState) => [...prevState, ...resp]);
    };
    searchMovies();
  }, [tmdbPage]);
  //fetching discover movies when user scroll down
  useEffect(() => {
    if (ratingSearch === 0) return setMovies([...moviesJSON]);
    setMovies(
      moviesJSON.filter(
        (movie) => Math.floor(movie.vote_average / 2) + 1 >= ratingSearch
      )
    );
  }, [ratingSearch, moviesJSON]);

  return (
    <Box>
      <Container
        sx={{
          marginTop: "0.65rem",
          padding: "0.65rem",
        }}
      >
        <Box position="sticky" top="65px" zIndex="1">
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
          </Paper>
        </Box>
        {/* grid movies container */}
        {movies.length === 0 ? (
          <LoadingSkeleton />
        ) : (
          <InfiniteScroll
            dataLength={movies.length}
            next={() => handleNextPage()}
            hasMore={true}
            loader={<LoadingSkeleton />}
            scrollThreshold={0.95}
          >
            <Container sx={{ width: "100%", marginTop: "1.5rem" }}>
              <Grid container justifyContent="center" spacing={2}>
                {movies.map((movie) => {
                  return (
                    <MovieCard
                      movie={movie}
                      key={movie.id}
                      genres={genresList}
                    />
                  );
                })}
              </Grid>
            </Container>
          </InfiniteScroll>
        )}
      </Container>
    </Box>
  );
};

export default RatingSearch;

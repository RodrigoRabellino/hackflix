import { Box, Container, Grid, Paper, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import LoadingSkeleton from "../loadingSkeleton/LoadingSkeleton";
import MovieCard from "../movieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  fetchGenres,
  fetchMovieByQuery,
} from "../../../../services/tmdbServices";

const NameSearch = () => {
  const [movies, setMovies] = useState([]);
  const [genresList, setGenres] = useState([]);
  const [querySearch, setQuerySearch] = useState("Star Wars");
  const [isFetching, setFetching] = useState(false);
  const [tmdbPage, setTmdbPage] = useState(1);

  const handleNextPage = () => {
    setTmdbPage(tmdbPage + 1);
  };

  const handleOnChange = (newValue) => {
    setTimeout(() => {
      setMovies([]);
      setTmdbPage(1);
      setQuerySearch(newValue);
    }, 1000);
  };

  useEffect(() => {
    const searchGenres = async () => {
      const resp = await fetchGenres();
      setGenres([...resp]);
    };
    searchGenres();
  }, []);

  useEffect(() => {
    if (querySearch.length === 0) return;
    setFetching(true);
    const fetchMovies = async (query, page) => {
      const resp = await fetchMovieByQuery(query, page);
      setMovies((prevState) => [...prevState, ...resp]);
      setFetching(false);
    };
    fetchMovies(querySearch, tmdbPage);
  }, [querySearch, tmdbPage]);

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
            <TextField
              color="info"
              size="small"
              label="Movie/TVShow Name"
              onChange={(e) => handleOnChange(e.target.value)}
            />
          </Paper>
        </Box>
        {/* grid movies container */}
        {isFetching === 0 ? (
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

export default NameSearch;

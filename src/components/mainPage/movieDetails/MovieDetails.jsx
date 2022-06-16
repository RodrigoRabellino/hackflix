import { useState, useEffect } from "react";
import {
  colors,
  IconButton,
  Paper,
  Skeleton,
  Typography,
  Box,
  Tooltip,
} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import {
  fetchOneMovie,
  fetchSimilarMovies,
  fetchWatchProviders,
  URL_POSTER_FULL,
} from "../../../services/tmdbServices";
import "./movieDetails.css";
import Carousel from "../genresPage/carousel/Carousel";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [showMore, setShowMore] = useState(false);
  const [providers, setProvider] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      setMovie(await fetchOneMovie(movieId));
    };
    const getProvider = async () => {
      setProvider(await fetchWatchProviders(movieId));
    };
    const getSimilarMovies = async () => {
      setSimilarMovies(await fetchSimilarMovies(movieId));
    };
    getMovie();
    getProvider();
    getSimilarMovies();
  }, [movieId]);
  console.log(movie);

  console.log("similar", providers);
  const { title, overview, backdrop_path, vote_average, vote_count, name } =
    movie;
  const backImgPath = URL_POSTER_FULL + backdrop_path;
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
            alt={`${!title ? name : title} poster`}
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
                padding: "1rem",
                borderRadius: "0",
              }}
            >
              <Box
                display="flex"
                onClick={() => setShowMore(!showMore)}
                justifyContent="space-between"
              >
                <Box display="flex">
                  <Typography variant="h4">{!title ? name : title}</Typography>

                  <IconButton>
                    {showMore ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
                </Box>
                <Box
                  display="flex"
                  width="15%"
                  justifyContent="start"
                  alignItems="center"
                >
                  <Typography display="flex" fontWeight="600">
                    IMDB:
                    <Typography color="primary" fontWeight="600">
                      {vote_average}{" "}
                    </Typography>
                  </Typography>
                  <Typography display="flex" fontWeight="600">
                    Vote count:
                    <Typography color="primary" fontWeight="600">
                      {vote_count}{" "}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Typography>{overview}</Typography>
              <Box
                sx={{
                  marginTop: "1rem",
                  transition: "0.2s",
                  height: showMore ? "1px" : "fit-content",
                }}
              >
                {providers.length === 0 ? null : (
                  <>
                    <Typography color="primary">Streaming now in: </Typography>
                    <Box
                      display="flex"
                      justifyContent="space-around"
                      paddingY="1rem"
                    >
                      {providers.map((provider) => {
                        let logoPath = URL_POSTER_FULL + provider.logo_path;
                        return (
                          <Box
                            key={provider.provider_id}
                            width="50px"
                            sx={{
                              transition: "0.2s",
                              ":hover": {
                                transition: "0.2s",
                                transform: "scale(1.1)",
                              },
                            }}
                          >
                            <Tooltip
                              title={provider.provider_name}
                              placement="top"
                            >
                              <img
                                srcSet={logoPath}
                                style={{ width: "50px" }}
                                alt={provider.provider_name}
                              />
                            </Tooltip>
                          </Box>
                        );
                      })}
                    </Box>
                  </>
                )}
                {similarMovies.length === 0 ? null : (
                  <>
                    <Typography color="primary">Similar Movies: </Typography>
                    <Box marginTop="1rem">
                      <Carousel movies={similarMovies} />
                    </Box>
                  </>
                )}
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
    <Box width="100%" height="100%">
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        animation="wave"
        sx={{
          bgcolor: colors.blueGrey[200],
        }}
      />
    </Box>
  );
};

export default MovieDetails;

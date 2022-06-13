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
} from "../../../services/tmdbServices";
import "./movieDetails.css";
import Carousel from "../genresPage/carousel/Carousel";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [showMore, setShowMore] = useState(false);
  const [providers, setProvider] = useState([]);
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

  console.log("similar", providers);
  const { title, overview, backdrop_path } = movie;
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
                padding: "1rem",
                borderRadius: "0",
              }}
            >
              <Box display="flex" onClick={() => setShowMore(!showMore)}>
                <Typography variant="h4">{title}</Typography>

                <IconButton>
                  {showMore ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </IconButton>
                <Typography color="primary">aca va average </Typography>
                <Typography color="primary">aca va puntahe</Typography>
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
                        let logoPath =
                          "https://image.tmdb.org/t/p/w500" +
                          provider.logo_path;
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

                <Typography color="primary">Similar Movies: </Typography>
                <Box marginTop="1rem">
                  <Carousel movies={similarMovies} />
                </Box>
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

import { useState, useEffect } from "react";
import {
  colors,
  IconButton,
  Paper,
  Skeleton,
  Typography,
  Box,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  fetchOneMovie,
  fetchSimilarMovies,
  fetchWatchProviders,
  URL_POSTER_FULL,
} from "../../../services/tmdbServices";
import MySlider from "../genresPage/mySlider/MySlider";
import "./movieDetails.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const urlPath = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [showMore, setShowMore] = useState(true);
  const [providers, setProvider] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  let mediaQueryW650 = useMediaQuery("(max-width:650px)");
  let mediaQueryW600 = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    let type = urlPath.search.split("=")[1];

    try {
      const getMovie = async () => {
        const response = await fetchOneMovie(movieId, type);
        setMovie(response);
      };
      const getProvider = async () => {
        const resp = await fetchWatchProviders(movieId, type);
        if (resp !== undefined) setProvider(resp);
      };
      const getSimilarMovies = async () => {
        const resp = await fetchSimilarMovies(movieId, type);
        if (!resp) setSimilarMovies(resp);
      };
      getMovie();
      getProvider();
      getSimilarMovies();
    } catch (error) {
      navigate("/error", { replace: true });
    }
  }, [movieId]);

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
          height="92vh"
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
                borderRadius: showMore ? "15px" : "0",
              }}
            >
              <Box
                display="flex"
                flexDirection={mediaQueryW600 ? "column" : "row"}
                onClick={() => setShowMore(!showMore)}
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Typography
                    noWrap
                    textOverflow="ellipsis"
                    variant={mediaQueryW650 ? "h5" : "h4"}
                  >
                    {!title ? name : title}
                  </Typography>

                  <IconButton>
                    {showMore ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                  </IconButton>
                </Box>
                <Box
                  display="flex"
                  marginY={mediaQueryW600 ? "0.65rem" : "0"}
                  justifyContent={mediaQueryW600 ? "center" : "end"}
                  alignItems={mediaQueryW600 ? "end" : "end"}
                  flexDirection={mediaQueryW600 ? "row" : "column"}
                >
                  <Typography itemType="span" display="flex" fontWeight="600">
                    IMDB:
                    <Typography
                      color="primary"
                      fontWeight="600"
                      component={"span"}
                    >
                      {vote_average}
                    </Typography>
                  </Typography>

                  <Typography
                    itemType="span"
                    display="flex"
                    fontWeight="600"
                    marginLeft="0.65rem"
                    noWrap={true}
                  >
                    Vote count:
                    <Typography
                      color="primary"
                      fontWeight="600"
                      component={"span"}
                    >
                      {vote_count}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              {showMore ? <Typography>{overview}</Typography> : <></>}

              {showMore ? (
                <MoreInfo providers={providers} similarMovies={similarMovies} />
              ) : null}
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

const MoreInfo = ({ providers, similarMovies }) => {
  return (
    <>
      <Box
        sx={{
          marginTop: "1rem",
          transition: "0.2s",
          height: "fit-content",
        }}
      >
        {providers.length === 0 ? (
          <></>
        ) : (
          <>
            <Typography color="primary">Streaming now in: </Typography>
            <Box display="flex" justifyContent="space-around" paddingY="1rem">
              {providers.map((provider) => {
                let logoPath = URL_POSTER_FULL + provider.logo_path;
                return (
                  <Box
                    borderRadius="50px"
                    overflow="hidden"
                    key={provider.provider_id}
                    width="50px"
                    height="50px"
                    sx={{
                      transition: "0.2s",
                      ":hover": {
                        transition: "0.2s",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Tooltip title={provider.provider_name} placement="top">
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
        {similarMovies.length === 0 ? (
          <></>
        ) : (
          <>
            <Typography color="primary">More like this: </Typography>
            <Box display="flex" justifyContent="space-around" paddingY="1rem">
              <MySlider movies={similarMovies} genre={""} />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default MovieDetails;

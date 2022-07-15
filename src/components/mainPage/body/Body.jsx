import {
  Box,
  CircularProgress,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState, useEffect } from "react";
import {
  fetchMovieByQuery,
  URL_POSTER_FULL,
} from "../../../services/tmdbServices";
import Carousel from "react-material-ui-carousel";
import "./body.css";
import NameSearch from "./nameSearch/NameSearch";
import { useNavigate } from "react-router-dom";
import { Launch } from "@mui/icons-material";

const Body = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      const resp = await fetchMovieByQuery("Star", 1);
      setMovies(resp);
    };
    searchMovies();
  }, []);

  return (
    <>
      <Box>
        {movies.length === 0 ? (
          <CircularProgress />
        ) : (
          <MySlider movies={movies.slice(0, 5)} />
        )}
      </Box>
      <Container>
        <NameSearch />
      </Container>
    </>
  );
};

const MySlider = ({ movies }) => {
  return (
    <Carousel indicators={false}>
      {movies.map((movie) => {
        return <MySliderItem movie={movie} key={movie.id} />;
      })}
    </Carousel>
  );
};

const MySliderItem = ({ movie }) => {
  let mediaQueryW650 = useMediaQuery("(max-width:650px)");
  const navigate = useNavigate();
  const { backdrop_path, title, overview, id, media_type } = movie;
  const posterPath = URL_POSTER_FULL + backdrop_path;
  return (
    <Box position="relative">
      <img srcSet={posterPath} alt={title} className="img-in-carousel" />
      <Container>
        <Box
          position="absolute"
          bottom="60px"
          maxWidth="500px"
          padding="0.65rem"
          zIndex="800"
        >
          <Typography
            component="span"
            sx={{
              textShadow: "1px 1px 3px black",
              color: "#fefefe",
            }}
            variant={mediaQueryW650 ? "h6" : "h3"}
            fontWeight="800"
          >
            {title}
          </Typography>
          <Typography
            sx={{
              textShadow: "1px 1px 3px black",
              color: "#fefefe",
            }}
            variant="body2"
            fontSize={mediaQueryW650 ? "12px" : "18px"}
            fontWeight="400"
          >
            {overview}
          </Typography>
          <Box display="flex" justifyContent="end" marginTop="0.65rem">
            <IconButton
              color="primary"
              variant="text"
              size="small"
              onClick={() =>
                navigate(
                  {
                    pathname: `/movie/${movie.id}`,
                    search: `?type=${media_type}`,
                  },
                  {
                    replace: false,
                  }
                )
              }
            >
              <Launch />
              <Typography variant="button">More</Typography>
            </IconButton>
          </Box>
        </Box>
      </Container>

      <Box
        position="absolute"
        className="gradient-shadow"
        height="230px"
        width="100%"
        zIndex="400"
        sx={{
          transform: "translateY(-230px)",
        }}
      />
    </Box>
  );
};

export default Body;

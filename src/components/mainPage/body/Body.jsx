import { Box, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchMovies, URL_POSTER_FULL } from "../../../services/tmdbServices";
import SimpleImageSlider from "react-simple-image-slider";
import "./body.css";
import NameSearch from "./nameSearch/NameSearch";

const Body = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      const resp = await fetchMovies(1);
      setMovies(resp);
    };
    searchMovies();
  }, []);

  return (
    <>
      {/* slider container */}
      <Box>
        {movies.length === 0 ? (
          <CircularProgress />
        ) : (
          <MySlider movies={movies.slice(0, 5)} />
        )}
        <Box
          position="absolute"
          className="gradient-shadow"
          height="200px"
          width="100%"
          sx={{
            transform: "translateY(-200px)",
          }}
        />
      </Box>
      {/*  body container */}
      <Box>
        {/* <RatingSearch /> */}
        <NameSearch />
      </Box>
    </>
  );
};

const MySlider = ({ movies }) => {
  const imagesUrl = movies.map((movie) => {
    return URL_POSTER_FULL + movie.backdrop_path;
  });
  return (
    <SimpleImageSlider
      width="100%"
      height={400}
      images={imagesUrl}
      showBullets={false}
      showNavs={true}
      slideDuration={2}
      loop={true}
      autoPlay
    />
  );
};

export default Body;

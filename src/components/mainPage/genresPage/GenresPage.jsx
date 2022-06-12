import { Box, Container, Skeleton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchGenres, fetchMovies } from "../../../services/tmdbServices";
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "./carousel/Carousel";

const GenresPage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getMovies = async (page) => {
      let resp = await fetchMovies(page);
      setMovies((prevState) => [...prevState, ...resp]);
    };

    const getGenres = async () => {
      let resp = await fetchGenres();
      setGenres([...resp]);
    };
    getGenres();
    for (let index = 1; index < 4; index++) {
      getMovies(index);
    }
  }, []);
  console.log(genres);

  return (
    <>
      {movies.length === 0 ? (
        <Skeleton variant="rectangular" width="500px" height="500px" />
      ) : (
        <>
          <CarouselGenre movies={movies} genre={genres[0]} />
          <CarouselGenre movies={movies} genre={genres[14]} />
          <CarouselGenre movies={movies} genre={genres[2]} />
          <CarouselGenre movies={movies} genre={genres[3]} />
        </>
      )}
    </>
  );
};

const CarouselGenre = ({ movies, genre }) => {
  return (
    <Box textAlign="start">
      <Typography variant="h5" color="HighlightText" paddingLeft="5rem">
        {genre.name}
      </Typography>
      <Carousel
        movies={movies.filter((movie) => movie.genre_ids[0] === genre.id)}
        genre={"Terror"}
      />
    </Box>
  );
};

export default GenresPage;

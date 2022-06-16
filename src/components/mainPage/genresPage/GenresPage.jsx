import { Box, Skeleton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchGenres, fetchMovies } from "../../../services/tmdbServices";
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "./carousel/Carousel";
import { useSelector } from "react-redux";

const GenresPage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const { favGenresIds } = useSelector((state) => state.user);

  console.log("favuser", favGenresIds);
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
  const userGenres = genres.filter((genre) => favGenresIds.includes(genre.id));
  console.log(userGenres);
  return (
    <>
      {movies.length === 0 ? (
        <GenreSkeleton />
      ) : (
        <>
          {userGenres.map((favGenre) => {
            console.log(genres[favGenre]);
            return (
              <CarouselGenre
                movies={movies}
                genre={favGenre}
                key={favGenre.id}
              />
            );
          })}
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

const GenreSkeleton = () => {
  const skeletonStyle = {
    backgroundColor: "rgb(68,68,68, 0.22)",
    borderRadius: "15px",
    width: "200px",
    height: "116px",
    marginX: "1rem",
  };
  return (
    <>
      <Skeleton sx={{ ...skeletonStyle, height: "40px", marginLeft: "75px" }} />
      <Box display="flex" padding="0.65rem">
        <Skeleton variant="rectangular" sx={skeletonStyle} />
        <Skeleton variant="rectangular" sx={skeletonStyle} />
        <Skeleton variant="rectangular" sx={skeletonStyle} />
        <Skeleton variant="rectangular" sx={skeletonStyle} />
      </Box>
    </>
  );
};

export default GenresPage;

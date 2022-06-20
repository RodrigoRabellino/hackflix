import { Box, Skeleton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchGenres, fetchMovies } from "../../../services/tmdbServices";
import "react-alice-carousel/lib/alice-carousel.css";
import { useSelector } from "react-redux";
import MySlider from "./mySlider/MySlider";

const GenresPage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const { favGenresIds } = useSelector((state) => state.user);

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

  return (
    <>
      {movies.length === 0 ? (
        <GenreSkeleton />
      ) : (
        <Box display="flex" flexDirection="column" alignItems="center">
          {userGenres.map((favGenre) => {
            return (
              <MySlider
                movies={movies.filter(
                  (movie) => movie.genre_ids[0] === favGenre.id
                )}
                genre={favGenre}
                key={favGenre.id}
              />
            );
          })}
        </Box>
      )}
    </>
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

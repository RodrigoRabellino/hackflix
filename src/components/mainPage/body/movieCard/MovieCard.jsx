import { useState } from "react";
import { Grid } from "@mui/material";
import MyModal from "../myModal/MyModal";
import "./movieCard.css";

const MovieCard = ({ movie, genres }) => {
  const [showModal, setShowModal] = useState(false);
  const { poster_path, genre_ids } = movie;
  const posterPath = "https://image.tmdb.org/t/p/w500" + poster_path;
  let genresInMovie = [];

  for (let i = 0; i < genre_ids.length; i++) {
    let resp = genres.find((genre) => genre.id === genre_ids[i]);
    genresInMovie.push(resp);
  }

  movie.genresInMovie = genresInMovie;

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Grid
        item
        lg="auto"
        onClick={() => setShowModal(!showModal)}
        sx={{
          transition: "0.1s",
          ":hover": {
            transition: "0.5s",
            transform: "translateY(-10px)",
          },
        }}
      >
        <img
          className="poster-movie"
          srcSet={posterPath}
          alt={`${movie.title} poster`}
        />
      </Grid>
      <MyModal open={showModal} handleClose={handleCloseModal} movie={movie} />
    </>
  );
};

export default MovieCard;

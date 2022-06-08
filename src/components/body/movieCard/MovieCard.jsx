import { useState } from "react";
import { Grid } from "@mui/material";
import MyModal from "../myModal/MyModal";
import "./movieCard.css";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  const { poster_path } = movie;
  return (
    <>
      <Grid item xs={2} onClick={() => setShowModal(!showModal)}>
        <img
          className="poster-movie"
          src={poster_path}
          alt={`${movie.title} poster`}
        />
      </Grid>
      <MyModal open={showModal} handleClose={handleCloseModal} movie={movie} />
    </>
  );
};

export default MovieCard;

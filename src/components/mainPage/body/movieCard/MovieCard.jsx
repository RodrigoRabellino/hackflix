import { useState } from "react";
import { Grid } from "@mui/material";
import MyModal from "../myModal/MyModal";
import "./movieCard.css";

const MovieCard = ({ movie, genres }) => {
  const [showModal, setShowModal] = useState(false);
  const { poster_path, title, name } = movie;
  const posterPath = "https://image.tmdb.org/t/p/w500" + poster_path;
  const handleCloseModal = () => {
    setShowModal(!showModal);
  };
  console.log(movie);

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
          srcSet={
            !poster_path
              ? require("../../../../assets/img/imgplaceholder.png")
              : posterPath
          }
          alt={`${!title ? name : title} poster`}
        />
      </Grid>
      {showModal ? (
        <MyModal
          open={showModal}
          handleClose={handleCloseModal}
          movie={movie}
        />
      ) : null}
    </>
  );
};

export default MovieCard;

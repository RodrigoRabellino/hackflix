import { useState } from "react";
import { Grid } from "@mui/material";
import MyModal from "../myModal/MyModal";
import "./movieCard.css";
import { URL_BACK_LOW } from "../../../../services/tmdbServices";

const MovieCard = ({ movie, genres }) => {
  const [showModal, setShowModal] = useState(false);
  const { poster_path, title, name } = movie;
  const posterPath = URL_BACK_LOW + poster_path;
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

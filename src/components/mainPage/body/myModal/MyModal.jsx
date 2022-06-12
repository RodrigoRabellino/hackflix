import { Modal, Paper, Typography, Box, Chip } from "@mui/material";
import "./myModal.css";

const MyModal = ({ open, handleClose, movie }) => {
  const { backdrop_path, title, vote_average, overview, genresInMovie } = movie;
  console.log(movie);
  const posterPath = "https://image.tmdb.org/t/p/w500" + backdrop_path;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          background: "#141414",
          display: "flex",
          width: "50%",
          overflow: "hidden",
        }}
      >
        <img
          className="img-modal"
          srcSet={posterPath}
          alt={`${title} poster`}
        />
        <Box
          padding={1}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          sx={{ boxShadow: "0 0 20px 20px #141414" }}
        >
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography color="HighlightText" variant="h5">
              {title}
            </Typography>
            <Paper sx={{ padding: "0.65rem", background: "#e41114" }}>
              <Typography
                variant="body1"
                color="HighlightText"
                fontWeight={800}
              >
                {vote_average}
              </Typography>
            </Paper>
          </Box>
          <Box paddingTop="1rem">
            <Typography color="HighlightText">{overview}</Typography>
          </Box>

          <Box
            textAlign="end"
            display="flex"
            justifyContent="space-evenly"
            marginTop="1rem"
          >
            {genresInMovie.map((genre) => {
              return (
                <Chip
                  key={genre.id}
                  color="primary"
                  label={<Typography variant="body2">{genre.name}</Typography>}
                />
              );
            })}
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
};

export default MyModal;
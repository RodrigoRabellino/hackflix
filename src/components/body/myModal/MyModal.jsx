import { Modal, Paper, Typography, Box } from "@mui/material";
import "./myModal.css";

const MyModal = ({ open, handleClose, movie }) => {
  const { poster_path, title, vote_average, overview, release_date } = movie;
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
          padding: "1rem",
          display: "flex",
          width: "50%",
        }}
      >
        <img className="img-modal" src={poster_path} alt={`${title} poster`} />
        <Box padding={1} marginLeft={1}>
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5">{title}</Typography>
            <Paper sx={{ padding: "0.65rem", background: "#141414" }}>
              <Typography variant="body1" color="primary" fontWeight={800}>
                {vote_average}
              </Typography>
            </Paper>
          </Box>

          <Typography sx={{ paddingTop: "1rem" }}>{overview}</Typography>
          <Box textAlign="end">
            <Typography variant="button" textAlign="end">
              {release_date}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
};

export default MyModal;

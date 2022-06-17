import { Launch, PlaylistAdd } from "@mui/icons-material";
import {
  Modal,
  Paper,
  Typography,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { URL_POSTER_FULL } from "../../../../services/tmdbServices";
import "./myModal.css";

const MyModal = ({ open, handleClose, movie }) => {
  const navigate = useNavigate();

  const { backdrop_path, title, vote_average, overview, name } = movie;
  const posterPath = URL_POSTER_FULL + backdrop_path;
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
          width: "50%",
          overflow: "hidden",
        }}
      >
        <img
          className="img-modal"
          srcSet={
            !backdrop_path
              ? require("../../../../assets/img/imgplaceholder.png")
              : posterPath
          }
          alt={`${!title ? name : title} poster`}
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
            paddingX="0.65rem"
          >
            <Box
              display="flex"
              width="75%"
              alignItems="center"
              justifyContent="start"
            >
              <Typography
                color="HighlightText"
                variant="h5"
                marginRight="0.65rem"
              >
                {!title ? name : title}
              </Typography>
              <Tooltip title="Add to list" placement="top">
                <IconButton color="primary" size="small">
                  <PlaylistAdd color="primary" />
                </IconButton>
              </Tooltip>
              <Tooltip title="View Now" placement="top">
                <IconButton
                  color="primary"
                  size="small"
                  onClick={() =>
                    navigate(`/movie/${movie.id}`, { replace: true })
                  }
                >
                  <Launch />
                </IconButton>
              </Tooltip>
            </Box>
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
          <Box paddingX="1rem" paddingTop="0.65rem">
            <Typography color="HighlightText">{overview}</Typography>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
};

export default MyModal;

import { Launch, PlaylistAdd } from "@mui/icons-material";
import {
  Modal,
  Paper,
  Typography,
  Box,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { URL_POSTER_FULL } from "../../../../services/tmdbServices";
import "./myModal.css";

const MyModal = ({ open, handleClose, movie }) => {
  const navigate = useNavigate();
  let mediaQueryW900 = useMediaQuery("(max-width:900px)");
  let mediaQueryW500 = useMediaQuery("(max-width:500px)");
  const { backdrop_path, title, vote_average, overview, name, media_type } =
    movie;
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
          transition: "0.5s",
          display: "flex",
          flexDirection: "column",
          background: "#141414",
          width: mediaQueryW900 ? "100%" : "800px",
          overflow: "hidden",
          borderRadius: mediaQueryW900 ? "0" : "5px",
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
              width={mediaQueryW900 ? "100%" : "75%"}
              alignItems="center"
              justifyContent="start"
            >
              <Typography
                sx={{ color: "#ffffff" }}
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
                    navigate(`/${media_type}/${movie.id}`, { replace: true })
                  }
                >
                  <Launch />
                </IconButton>
              </Tooltip>
            </Box>
            {mediaQueryW500 ? (
              <></>
            ) : (
              <Paper
                sx={{
                  padding: "0.65rem",
                  background: "#e41114",
                  height: "50px",
                  width: "50px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#ffffff" }}
                  fontWeight={800}
                  fontSize="20px"
                >
                  {vote_average}
                </Typography>
              </Paper>
            )}
          </Box>
          <Box paddingX="1rem" paddingTop="0.65rem">
            <Typography sx={{ color: "#ffffff" }}>{overview}</Typography>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
};

export default MyModal;

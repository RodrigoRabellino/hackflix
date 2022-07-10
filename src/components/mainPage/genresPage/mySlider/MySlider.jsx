import {
  Container,
  Divider,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { Slide } from "react-slideshow-image";
import { URL_BACK_LOW } from "../../../../services/tmdbServices";
import "react-slideshow-image/dist/styles.css";
import { Launch, PlaylistAdd } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./mySlider.css";

const MySlider = ({ movies, genre }) => {
  const navigate = useNavigate();
  const properties = {
    duration: 1000,
    autoplay: false,
    indicators: false,
    cssClass: "mySlider",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (movies.length === 0) return null;
  return (
    <Container display="flex" flexDirection="column">
      <Box>
        <Typography
          variant="h5"
          sx={{ color: "#ffffff" }}
          textAlign="start"
          marginBottom="0.65rem"
        >
          {genre.name}
        </Typography>
      </Box>
      <Slide {...properties}>
        {movies.map((movie) => {
          const { backdrop_path, title, id } = movie;
          const backdropPath = URL_BACK_LOW + backdrop_path;
          return (
            <Box display="flex" justifyContent="center">
              <Box position="relative" overflow="hidden" width="200px">
                <img
                  key={id}
                  srcSet={
                    !backdrop_path
                      ? require("../../../../assets/img/imgplaceholder.png")
                      : backdropPath
                  }
                  alt={title}
                  style={{
                    pointerEvents: "none",
                    width: "200px",
                    height: "112px",
                    borderRadius: "15px",
                    objectFit: "cover",
                  }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  width="100%"
                  position="absolute"
                  bottom="15px"
                  overflow="hidden"
                  bgcolor="rgb(0, 0, 0, 0.5)"
                  sx={{
                    transition: "0.2s",
                    justifyContent: "center",
                    height: "24px",
                    ":hover": {
                      transition: "0.2s",
                      height: "82px",
                      backgroundColor: "rgb(0, 0, 0, 0.8)",
                    },
                  }}
                >
                  {/* onClick: () => navigate(`/movie/${id}`, { replace: true }) */}
                  <Box>
                    <Tooltip title="Add to List" placement="top">
                      <IconButton>
                        <PlaylistAdd color="info" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="View More" placement="top">
                      <IconButton
                        onClick={() =>
                          navigate(`/movie/${id}`, { replace: true })
                        }
                      >
                        <Launch sx={{ color: "#ffffff" }} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Typography noWrap sx={{ color: "#ffffff" }} fontWeight="700">
                    {title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Slide>
    </Container>
  );
};

export default MySlider;

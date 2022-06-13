import AliceCarousel from "react-alice-carousel";
import { useEffect, useState, useRef } from "react";
import { Box, Container, SpeedDial, SpeedDialAction } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PlaylistAdd, Launch, Menu, MenuOpen } from "@mui/icons-material";

const Carousel = ({ movies }) => {
  const navigate = useNavigate();

  const items = movies.map((movie) => {
    const dialItems = [
      {
        icon: <PlaylistAdd fontSize="small" color="primary" />,
        name: "Add to favorite",
        onClick: () => {},
      },
      {
        icon: <Launch color="primary" fontSize="small" />,

        name: "View More",
        onClick: () => navigate(`/movie/${movie.id}`, { replace: true }),
      },
    ];

    const posterPath = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
    return (
      <Box
        sx={{
          padding: "0.65rem 0 0.65rem 0",
          width: "200px",
          transition: "0.3s",
          ":hover": {
            transition: "0.3s",
          },
        }}
      >
        <img
          srcSet={posterPath}
          alt={movie.title}
          style={{
            pointerEvents: "none",
            width: "200px",
            borderRadius: "15px",
          }}
        />
        <SpeedDial
          ariaLabel="SpeedDial"
          sx={{
            position: "absolute",
            top: 20,
            left: 16,
            width: "25px",
            height: "25px",
          }}
          icon={<Menu fontSize="small" />}
          openIcon={<MenuOpen fontSize="small" />}
          direction="right"
        >
          {dialItems.map((item) => (
            <SpeedDialAction
              onClick={item.onClick}
              key={item.name}
              icon={item.icon}
              tooltipTitle={item.name}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  });

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    900: { items: 4 },
    1024: { items: 5 },
    1600: { items: 5 },
  };

  const percent = 0.3;
  const section = useRef(null);
  const [padding, setPadding] = useState(0);

  const syncState = () => {
    const { current } = section;
    if (current) {
      setPadding(current.offsetWidth * percent);
    }
  };

  useEffect(syncState, []);

  return (
    <Container>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls
        disableButtonsControls
        paddingRight={padding}
        controlsStrategy="alternate"
        infinite
      />
    </Container>
  );
};

export default Carousel;

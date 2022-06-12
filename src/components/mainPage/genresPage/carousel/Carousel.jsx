import AliceCarousel from "react-alice-carousel";
import { useEffect, useState, useRef } from "react";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Carousel = ({ movies }) => {
  const navigate = useNavigate();
  const items = movies.map((movie) => {
    const posterPath = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
    return (
      <Box
        onClick={() => navigate(`/movie/${movie.id}`, { replace: true })}
        sx={{
          width: "200px",
          transition: "0.3s",
          border: "1px solid red",
          ":hover": {
            transition: "0.3s",
            transform: "scale(1.1)",
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
      </Box>
    );
  });
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    900: { items: 4 },
    1024: { items: 5 },
    1600: { items: 7 },
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
      />
    </Container>
  );
};

export default Carousel;

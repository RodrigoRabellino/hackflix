import { Container } from "@mui/system";
import movies from "../../../services/movies.json";
import "./carousel.css";

const Carousel = () => {
  const randomIndex = Math.floor(Math.random() * (movies.length - 1) + 1);
  const movie = movies[randomIndex];
  console.log(movie);
  return (
    <Container sx={{ width: "100vw", height: "60vh", display: "flex" }}>
      <img
        className="my-img"
        srcSet={movie.poster_path}
        alt={`${movie.title} poster`}
      />
    </Container>
  );
};

export default Carousel;

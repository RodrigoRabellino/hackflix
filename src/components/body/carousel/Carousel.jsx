import { Container } from "@mui/system";
import movies from "../../../services/movies.json";
import "./carousel.css";

const Carousel = () => {
  const randomIndex = Math.floor(Math.random() * (movies.length - 1) + 1);
  const movie = movies[randomIndex];
  console.log(movie);
  return (
    <Container sx={{ width: "100vw", height: "60vh", display: "flex" }}>
      <img className="my-img" src={movie.poster_path} alt="" srcset="" />
    </Container>
  );
};

export default Carousel;

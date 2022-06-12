import { Route, Routes, MemoryRouterProps } from "react-router-dom";
import About from "./components/aboutPage/About";
import ErrorPage from "./components/errorPage/ErrorPage";
import GenresPage from "./components/mainPage/genresPage/GenresPage";
import { Header } from "./components/mainPage/header";
import MainPage from "./components/mainPage/MainPage";
import { MovieDetails } from "./components/mainPage/movieDetails";

const MyRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/about" element={<About />} />

        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default MyRoutes;

import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage";
import { Header } from "./components/mainPage/header";
import MainPage from "./components/mainPage/MainPage";
import { MovieDetails } from "./components/mainPage/movieDetails";

const MyRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default MyRoutes;

import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage";
import MainPage from "./components/mainPage/MainPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<MainPage />} />
      <Route path="*" exact element={<ErrorPage />} />
    </Routes>
  );
};

export default MyRoutes;

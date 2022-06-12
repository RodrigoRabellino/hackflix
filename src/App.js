import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import "./App.css";
import LoginPage from "./components/loginPage/LoginPage";
import MyRoutes from "./MyRoutes";

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#e41114",
    },
    secondary: {
      main: "#5b5b5b",
    },
    background: {
      main: "#141414",
    },
    text: {
      main: "#e5e5e5",
    },
    info: {
      main: "#54b9c5",
    },
  },
});

const usersList = [
  { id: 1, name: "user1", favoritesGenres: [], imgUrl: "user1" },
  { id: 2, name: "user2", favoritesGenres: [], imgUrl: "user2" },
  { id: 3, name: "user3", favoritesGenres: [], imgUrl: "user3" },
];

function App() {
  const [isLogged, setLogged] = useState(false);

  const handleLogged = () => {
    setLogged(!isLogged);
  };

  return (
    <ThemeProvider theme={myTheme}>
      {isLogged ? (
        <div className="App">
          <MyRoutes />
        </div>
      ) : (
        <LoginPage usersList={usersList} handleLogged={handleLogged} />
      )}
    </ThemeProvider>
  );
}

export default App;

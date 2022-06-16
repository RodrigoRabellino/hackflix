import { ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
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

function App() {
  const user = useSelector((state) => state.user);
  console.log("user desde app", user);
  return (
    <ThemeProvider theme={myTheme}>
      {Object.entries(user).length !== 0 ? (
        <div className="App">
          <MyRoutes />
        </div>
      ) : (
        <LoginPage />
      )}
    </ThemeProvider>
  );
}

export default App;

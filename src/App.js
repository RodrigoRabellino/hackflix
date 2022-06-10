import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";

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
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <MyRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;

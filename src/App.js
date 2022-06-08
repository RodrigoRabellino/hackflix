import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import { Header } from "./components/header";
import { Body } from "./components/body";

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
        <Header />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;

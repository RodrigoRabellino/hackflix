import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  useMediaQuery,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import hackFlixLogo from "../../../assets/img/hackflix.png";
import { Link } from "react-router-dom";

import "./header.css";
import NavBarItems from "./NavBarItems";
import { Search } from "@mui/icons-material";

const Header = () => {
  let mediaQueryW500 = useMediaQuery("(max-width:500px)");
  const [inputSearch, setInputSearch] = useState("");

  const handleOnChangeInput = (newValue) => {
    setInputSearch(newValue);
    setTimeout(() => {}, 1500);
  };

  const handleSearch = () => {};

  return (
    <Box sx={{ flexGrow: 1 }} position="sticky" top="0" zIndex={900}>
      <AppBar position="static" elevation={1} sx={{ background: "#141414" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            marginLeft: "1rem ",
            marginRight: "1rem ",
          }}
        >
          <Box display="flex" alignItems="center">
            <Link to="/">
              <img
                style={{ width: mediaQueryW500 ? "6rem" : "10rem" }}
                srcSet={hackFlixLogo}
                alt="hackFLix logo"
                loading="lazy"
              />
            </Link>
            <FormControl
              sx={{
                marginLeft: "1rem",
                transition: "0.3s",
                width: "60px",
                background: "#1d5462",
                borderRadius: "5px",
                ":hover": {
                  transition: "0.3s",
                  width: "200px",
                },
                "::focus": {
                  transition: "0.3s",
                  width: "200px",
                },
              }}
              variant="outlined"
            >
              <OutlinedInput
                color="info"
                size="small"
                id="input-search"
                type="text"
                value={inputSearch}
                onChange={(e) => handleOnChangeInput(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleSearch}>
                      <Search color="info" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>

          <NavBarItems />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

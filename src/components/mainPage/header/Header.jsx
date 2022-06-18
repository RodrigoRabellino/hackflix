import { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  Typography,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Notifications } from "@mui/icons-material";
import hackFlixLogo from "../../../assets/img/hackflix.png";
import { useSelector } from "react-redux";
import "./header.css";

const Header = () => {
  let mediaQueryW500 = useMediaQuery("(max-width:500px)");
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
          <Link to="/">
            <img
              style={{ width: mediaQueryW500 ? "6rem" : "9rem" }}
              srcSet={hackFlixLogo}
              alt="hackFLix logo"
              loading="lazy"
            />
          </Link>
          <NavBarItems />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const NavBarItems = () => {
  const [notifications, setNotifications] = useState(0);
  const user = useSelector((state) => state.user);

  const linksStyles = { textDecoration: "none", color: "#fefefe" };

  let mediaQueryW900 = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    if (notifications === 0) {
      const timer = Math.floor(Math.random() * (15000 - 5000) + 1);
      setTimeout(() => {
        return setNotifications(Math.floor(Math.random() * (7 - 1) + 1));
      }, timer);
    }
  }, [notifications]);

  const handleNotifications = () => {
    setNotifications(0);
  };

  return (
    <Box
      display="flex"
      width="50%"
      maxWidth="500px"
      alignItems="center"
      justifyContent={mediaQueryW900 ? "end" : "space-between"}
    >
      {mediaQueryW900 ? (
        <IconButton>
          <Menu htmlColor="#fefefe" />
        </IconButton>
      ) : (
        <>
          <Link to="/" style={linksStyles}>
            <Typography>Home</Typography>
          </Link>
          <Link to="/" style={linksStyles}>
            <Typography>Movie List</Typography>
          </Link>
          <Link to="/genres" style={linksStyles}>
            <Typography>Genres</Typography>
          </Link>
          <Link to="/about" style={linksStyles}>
            <Typography>About</Typography>
          </Link>
          <Link to="/contact" style={linksStyles}>
            <Typography>Contact</Typography>
          </Link>
          <Box>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="text"
              onClick={() => handleNotifications()}
            >
              <Badge badgeContent={notifications} color="primary">
                <Notifications color="text" />
              </Badge>
            </IconButton>
            <IconButton
              id="userAvatar"
              size="large"
              aria-label="account of current user"
              onClick={() => {}}
            >
              <Avatar
                variant="rounded"
                srcSet={require(`../../../assets/img/${user.imgUrl}.png`)}
              />
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Header;

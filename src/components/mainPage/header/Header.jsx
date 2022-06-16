import { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Notifications } from "@mui/icons-material";
import hackFlixLogo from "../../../assets/img/hackflix.png";
import { useSelector } from "react-redux";
import "./header.css";
const Header = () => {
  const user = useSelector((state) => state.user);
  const [notifications, setNotifications] = useState(0);

  const handleNotifications = () => {
    setNotifications(0);
  };

  useEffect(() => {
    if (notifications === 0) {
      const timer = Math.floor(Math.random() * (15000 - 5000) + 1);
      setTimeout(() => {
        return setNotifications(Math.floor(Math.random() * (7 - 1) + 1));
      }, timer);
    }
  }, [notifications]);

  return (
    <Box
      sx={{ flexGrow: 1 }}
      position="sticky"
      top="0"
      color="Background"
      zIndex={900}
    >
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
              className="my-hackflix"
              srcSet={hackFlixLogo}
              alt="hackFLix logo"
              loading="lazy"
            />
          </Link>

          <Box
            display="flex"
            width="50%"
            maxWidth="500px"
            minWidth="380px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography color="HighlightText">Home</Typography>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography color="HighlightText">Movie List</Typography>
            </Link>
            <Link to="/genres" style={{ textDecoration: "none" }}>
              <Typography color="HighlightText">Genres</Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography color="HighlightText">About</Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Typography color="HighlightText">Contact</Typography>
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

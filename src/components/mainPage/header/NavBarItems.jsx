import { useState, useEffect } from "react";
import {
  Notifications,
  Menu,
  ArrowForwardIos,
  ArrowBackIos,
  MenuOpen,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Box,
  Badge,
  IconButton,
  Typography,
  Avatar,
  useMediaQuery,
  Drawer,
  Stack,
} from "@mui/material";

const NavBarItems = () => {
  let mediaQueryW900 = useMediaQuery("(max-width:900px)");

  return (
    <Box
      display="flex"
      width="50%"
      maxWidth="500px"
      alignItems="center"
      justifyContent={mediaQueryW900 ? "end" : "space-between"}
    >
      {mediaQueryW900 ? <LateralMenu /> : <Items />}
    </Box>
  );
};

const LateralMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => setShowMenu((prev) => !prev);

  return (
    <>
      <IconButton onClick={handleMenu}>
        <Menu htmlColor="#fefefe" />
      </IconButton>
      <Drawer anchor="right" open={showMenu} onClose={handleMenu}>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            padding: "1rem",
            background: "#040c0e",
            height: "100%",
          }}
        >
          <Box display="flex" justifyContent="center" onClick={handleMenu}>
            <MenuOpen color="info" fontSize="large" />
          </Box>
          <Items />
          <Box display="flex" justifyContent="center">
            <IconButton onClick={handleMenu}>
              {showMenu ? (
                <ArrowForwardIos color="info" />
              ) : (
                <ArrowBackIos color="info" />
              )}
            </IconButton>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
};

const Items = () => {
  const [notifications, setNotifications] = useState(0);
  const user = useSelector((state) => state.user);

  const linksStyles = { textDecoration: "none", color: "#fefefe" };

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
  );
};

export default NavBarItems;

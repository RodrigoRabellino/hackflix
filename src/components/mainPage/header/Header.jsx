import { Box, AppBar, Toolbar, Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { AccountCircle, Notifications } from "@mui/icons-material";
import hackFlixLogo from "../../../assets/img/hackflix.png";
import "./header.css";
const Header = () => {
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

          <Box display="flex">
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="text"
            >
              <Badge badgeContent={17} color="primary">
                <Notifications color="text" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => {}}
              color="text"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

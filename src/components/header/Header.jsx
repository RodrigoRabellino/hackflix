import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  Container,
} from "@mui/material";
import "./header.css";
import movies from "../../services/movies.json";
import { AccountCircle, Notifications } from "@mui/icons-material";
import { useScrollTrigger } from "@mui/material";
// import hackFlixLogo from "../../assets/img/hackFLix.png";

const Header = () => {
  const randomIndex = Math.floor(Math.random() * (movies.length - 1) + 1);
  const movie = movies[randomIndex];

  const trigger = useScrollTrigger();
  console.log(trigger);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            marginLeft: "1rem ",
            marginRight: "1rem ",
          }}
        >
          <Typography color="primary">HACKFLIX</Typography>
          {/* <img src={""} alt="hackFLix logo" loading="lazy" /> */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
        <Container
          sx={{
            width: "100%",
            height: "25vh",
            display: "flex",
            padding: 0,
          }}
        >
          <img className="my-img" src={movie.poster_path} alt="" srcset="" />
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

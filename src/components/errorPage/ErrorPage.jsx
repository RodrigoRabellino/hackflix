import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import backImage from "../../assets/img/errorback.jpg";
import "./errorPage.css";

const ErrorPage = () => {
  return (
    <Box width="100%" height="100vh" position="relative" text-align="center">
      <img srcSet={backImage} alt="mandalorian" className="error-img" />
      <Box
        display="flex"
        flexDirection="column"
        position="absolute"
        top="0%"
        width="100%"
        height="100%"
      >
        <Typography
          variant="button"
          color="HighlightText"
          sx={{
            fontSize: {
              xs: 50,
              sm: 100,
              md: 150,
              lg: 200,
              xl: 230,
            },
          }}
        >
          this isn't the way
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            color="primary"
            fontSize={25}
            sx={{ textDecoration: "underline" }}
          >
            Go to home
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default ErrorPage;

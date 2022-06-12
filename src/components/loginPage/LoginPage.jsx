import { Container, Typography, Box } from "@mui/material";
import { useState } from "react";

const LoginPage = ({ usersList, handleLogged }) => {
  const users = usersList;
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "3.5vw",
          //   fontSize: {
          //     xs: 50,
          //     sm: 60,
          //     md: 70,
          //     lg: 80,
          //     xl: 120,
          //   },
        }}
        color="HighlightText"
      >
        Who's watching?
      </Typography>
      <Box display="flex" flexDirection="row">
        {users.map((user) => {
          return (
            <Box
              key={user.id}
              onClick={() => handleLogged()}
              sx={{
                pointerEvents: "all",
                margin: "1rem",
                transition: "0.6s",
                borderRadius: "5px",
                overflow: "hidden",
                ":hover": {
                  transition: "0.6s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                srcSet={require(`../../assets/img/${user.imgUrl}.png`)}
                alt={user.name}
                style={{
                  width: "125px",
                  borderRadius: "5px",
                }}
              />
              <Typography textAlign="center" color="HighlightText">
                {user.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default LoginPage;

import { Container, Typography, Box, useMediaQuery, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { logInUser } from "../../redux/user/slice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let mediaQueryW900 = useMediaQuery("(max-width:900px)");
  const usersList = [
    {
      id: 1,
      name: "user1",
      favGenresIds: [35, 28, 27, 9648, 53],
      imgUrl: "user1",
      kids: false,
    },
    {
      id: 2,
      name: "user2",
      favGenresIds: [16, 80, 18, 14, 10749],
      imgUrl: "user2",
      kids: false,
    },
    {
      id: 3,
      name: "user3",
      favGenresIds: [10751, 16, 80],
      imgUrl: "user3",
      kids: true,
    },
  ];

  const handleLogin = (user) => {
    dispatch(logInUser(user));
    navigate("/", { replace: true });
  };

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
          color: "#fefefe",
        }}
      >
        Who's watching?
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {usersList.map((user) => {
          return (
            <Grid
              item
              lg="auto"
              key={user.id}
              onClick={() => handleLogin(user)}
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
              <Typography textAlign="center" sx={{ color: "#fefefe" }}>
                {user.name}
              </Typography>
            </Grid>
          );
        })}
      </Grid>

      <Typography sx={{ color: "#282828" }}>Version: 1.1.2</Typography>
    </Container>
  );
};

export default LoginPage;

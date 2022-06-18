import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Paper,
  Button,
  useMediaQuery,
} from "@mui/material";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";

const Contact = () => {
  let mediaQueryW800 = useMediaQuery("(max-width:800px)");
  const styles = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "0.2s",
    ":hover": {
      transition: "0.4s",
      transform: "translateY(-5px)",
    },
  };
  return (
    <Box
      height="90vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <ContactForm mediaQuery={mediaQueryW800} />
      <Box
        width="80%"
        maxWidth="900px"
        display="flex"
        flexDirection={mediaQueryW800 ? "column" : "row"}
        alignItems={mediaQueryW800 ? "start" : "center"}
        justifyContent="space-between"
      >
        <Box
          sx={styles}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/rodrigorabellino",
              "_blank"
            );
          }}
        >
          <LinkedIn fontSize="large" sx={{ color: "#54c6d4" }} />
          <Typography sx={{ color: "#fefefe" }} variant="body1" fontSize="20px">
            /RodrigoRabellino
          </Typography>
        </Box>
        <Box
          sx={styles}
          onClick={() => {
            window.location.assign("mailto:rorabe93@gmail.com");
          }}
        >
          <Mail fontSize="large" sx={{ color: "#54c6d4" }} />
          <Typography sx={{ color: "#fefefe" }} variant="body1" fontSize="20px">
            rorabe93@gmail.com
          </Typography>
        </Box>
        <Box
          sx={styles}
          onClick={() => {
            window.open("https://github.com/RodrigoRabellino", "_blank");
          }}
        >
          <GitHub fontSize="large" sx={{ color: "#54c6d4" }} />
          <Typography sx={{ color: "#fefefe" }} variant="body1" fontSize="20px">
            /RodrigoRabellino
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const ContactForm = ({ mediaQuery }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mediaQueryW550 = useMediaQuery("(max-width:550px)");
  return (
    <Box
      width="80%"
      maxWidth="860px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      marginBottom="1rem"
    >
      <Typography
        variant={mediaQueryW550 ? "h4" : "h2"}
        fontWeight="700"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          color: "#54c6d4",
        }}
      >
        Contact Me
      </Typography>

      <Paper elevation={0} sx={{ padding: "1rem", width: "100%" }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ width: "100%" }}
                label="Full Name"
                type="text"
                value={fullName}
                size="small"
                variant="standard"
                color="info"
                onChange={(e) => setFullName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ width: "100%" }}
                label="Email"
                type="email"
                value={email}
                size="small"
                variant="standard"
                color="info"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                label="Message"
                type="text"
                value={message}
                size="small"
                multiline
                rows={4}
                variant="standard"
                color="info"
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                type="submit"
                variant="outlined"
                color="info"
                sx={{ width: "25%" }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;

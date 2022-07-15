import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const mediaQueryW650 = useMediaQuery("(max-width:650px)");

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: mediaQueryW650 ? "column" : "row",
        paddingTop: "2rem",
        color: "#fefefe",
        justifyContent: "space-between",
      }}
    >
      <Typography maxWidth="65ch" textAlign="start">
        Este proyecto fue realizado como un ejercicio de clase en el Bootcamp
        FullStack dictado por HackAcademy. Puedes ver mas en:{" "}
        <Typography
          fontWeight="700"
          component={"span"}
          onClick={() =>
            window.open("https://www.rodrigorabellino.com/", "_blank")
          }
          sx={{
            cursor: "pointer",
            color: "#54c6d4",
            ":hover": {
              textDecoration: "underline",
            },
          }}
        >
          www.rodrigorabellino.com
        </Typography>
      </Typography>
      <Typography maxWidth="65ch" textAlign="start">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum quod
        dolorem earum, neque minus quaerat atque, ut blanditiis architecto
        obcaecati! Necessitatibus autem asperiores ducimus fugiat aliquid sunt
        modi, quidem reprehenderit natus, nemo magni! Odio debitis dolores
        explicabo error a praesentium quas necessitatibus iusto consequatur
        amet, repellendus dolor omnis totam odit. Nobis quas dolore odit magni
        aspernatur nulla molestias nesciunt facere eligendi nostrum? Ratione,
        eaque ipsa odit sapiente nesciunt, consectetur corrupti ex quo ullam
        facere eligendi quibusdam exercitationem!
      </Typography>
    </Container>
  );
};

export default About;

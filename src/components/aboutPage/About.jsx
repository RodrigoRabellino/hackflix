import { Box, Container, Typography, useMediaQuery } from "@mui/material";

const About = () => {
  const mediaQueryW650 = useMediaQuery("(max-width:650px)");
  return (
    <Box width="100vw">
      <Container
        sx={{
          display: "flex",
          flexDirection: mediaQueryW650 ? "column" : "row",
          paddingTop: "2rem",
          color: "#fefefe",
        }}
      >
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum
          quod dolorem earum, neque minus quaerat atque, ut blanditiis
          architecto obcaecati! Necessitatibus autem asperiores ducimus fugiat
          aliquid sunt modi, quidem reprehenderit natus, nemo magni! Odio
          debitis dolores explicabo error a praesentium quas necessitatibus
          iusto consequatur amet, repellendus dolor omnis totam odit. Nobis quas
          dolore odit magni aspernatur nulla molestias nesciunt facere eligendi
          nostrum? Ratione, eaque ipsa odit sapiente nesciunt, consectetur
          corrupti ex quo ullam facere eligendi quibusdam exercitationem! Vero
          laboriosam eius modi amet distinctio tempora quasi earum voluptates
          harum facilis mollitia, repudiandae a recusandae. Facilis numquam
          architecto possimus! Perferendis maiores iure minima sint
          necessitatibus dolores facilis, repellendus quasi minus molestiae est
          unde nam! Doloremque sint ea repudiandae illo numquam ipsam at,
          deserunt quis excepturi hic obcaecati exercitationem cum maiores
          dolores quo. Recusandae a fugit, eum culpa repellat ullam non aliquam,
          voluptatibus voluptas consectetur fuga dolore et obcaecati reiciendis
          at. Sed?
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum
          quod dolorem earum, neque minus quaerat atque, ut blanditiis
          architecto obcaecati! Necessitatibus autem asperiores ducimus fugiat
          aliquid sunt modi, quidem reprehenderit natus, nemo magni! Odio
          debitis dolores explicabo error a praesentium quas necessitatibus
          iusto consequatur amet, repellendus dolor omnis totam odit. Nobis quas
          dolore odit magni aspernatur nulla molestias nesciunt facere eligendi
          nostrum? Ratione, eaque ipsa odit sapiente nesciunt, consectetur
          corrupti ex quo ullam facere eligendi quibusdam exercitationem! Vero
          laboriosam eius modi amet distinctio tempora quasi earum voluptates
          harum facilis mollitia, repudiandae a recusandae. Facilis numquam
          architecto possimus! Perferendis maiores iure minima sint
          necessitatibus dolores facilis, repellendus quasi minus molestiae est
          unde nam! Doloremque sint ea repudiandae illo numquam ipsam at,
          deserunt quis excepturi hic obcaecati exercitationem cum maiores
          dolores quo. Recusandae a fugit, eum culpa repellat ullam non aliquam,
          voluptatibus voluptas consectetur fuga dolore et obcaecati reiciendis
          at. Sed?
        </Typography>
      </Container>
    </Box>
  );
};

export default About;

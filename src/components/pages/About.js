import ModalComponent from "../layout/ModalComponent";
import { Grid, Box, Stack, Typography } from "@mui/material";

//TODO Update page to use MUI cards for each individual section
//TODO create new reusable component to replace Bootstrap ModalComponent

const About = ({ aboutData }) => {
  const { auto, single, con1, con2, con3 } = aboutData;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "30px",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Typography variant={"h2"}>{"About This Application"}</Typography>
      <Grid container maxWidth={"lg"} gap={8}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant={"h5"}>{"Application Objective"}</Typography>
          <Typography
            variant={"subtitle1"}
            sx={{
              maxWidth: "400px",
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {
              "Design an elevator system for a 100 story building minimizing  the time between calling an elevator and arrival at desired floor."
            }
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant={"h5"}>{"Application Modes"}</Typography>
          <Stack direction={"row"} spacing={2} sx={{}}>
            <ModalComponent data={auto} />
            <ModalComponent data={single} />
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant={"h5"}>{"Application Constraints"}</Typography>
          <Stack direction={"row"} spacing={2} sx={{}}>
            <ModalComponent data={con1} />
            <ModalComponent data={con2} />
            <ModalComponent data={con3} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;

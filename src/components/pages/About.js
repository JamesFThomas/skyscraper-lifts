import ButtonDialog from "../layout/ButtonDialog";
import { Grid, Box, Stack, Typography } from "@mui/material";

const pageContainerStyle = () => {
  return {
    display: "flex",
    flexDirection: "column",
    paddingTop: "30px",
    alignItems: "center",
    gap: "50px",
  };
};

const gridItemStyle = () => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };
};

const objectiveTextStyle = () => {
  return {
    maxWidth: "400px",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  };
};

const About = ({ aboutData }) => {
  const { objective, auto, single, con1, con2, con3 } = aboutData;

  return (
    <Box sx={pageContainerStyle}>
      <Typography variant={"h2"}>{"About This Application"}</Typography>
      <Grid container maxWidth={"lg"} gap={8}>
        <Grid item xs={12} sx={gridItemStyle}>
          <Typography variant={"h5"}>{"Application Objective"}</Typography>
          <Typography variant={"subtitle1"} sx={objectiveTextStyle}>
            {objective}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={gridItemStyle}>
          <Typography variant={"h5"}>{"Application Modes"}</Typography>
          <Stack direction={"row"} spacing={2}>
            <ButtonDialog data={auto} />
            <ButtonDialog data={single} />
          </Stack>
        </Grid>
        <Grid item xs={12} sx={gridItemStyle}>
          <Typography variant={"h5"}>{"Application Constraints"}</Typography>
          <Stack direction={"row"} spacing={2}>
            <ButtonDialog data={con1} />
            <ButtonDialog data={con2} />
            <ButtonDialog data={con3} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;

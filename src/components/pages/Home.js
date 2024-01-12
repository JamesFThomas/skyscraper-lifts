import { useSelector, useDispatch } from "react-redux";
import FloorsPanel from "../singleMode/liftParts/FloorPanel";
import DisplayPanel from "../singleMode/liftParts/DisplayPanel";
import CallPanel from "../singleMode/liftParts/CallPanel";

import { Box, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <Stack
      direction={"column"}
      padding={4}
      spacing={2}
      justifyContent={"center"}
    >
      <Typography
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
        variant="h1"
      >
        {"Home"}
      </Typography>
      {/* <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <FloorsPanel />
        <DisplayPanel />
        <CallPanel />
      </Box> */}
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          gap: "20px",
        }}
      >
        <Typography variant="h2">Welcome To My building</Typography>
        <Typography variant="h3">About - working</Typography>
        <Typography variant="h3">Single - working</Typography>
        <Typography variant="h3">Auto - coming soon</Typography>
      </Box>
    </Stack>
  );
};

export default Home;

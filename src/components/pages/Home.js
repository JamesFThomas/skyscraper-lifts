import { useSelector, useDispatch } from "react-redux";
import FloorsPanel from "../lift/FloorPanel";
import DisplayPanel from "../lift/DisplayPanel";

import { Box, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <Stack direction={"column"} padding={2} spacing={2}>
      <Typography>{"Home"}</Typography>
      <Box
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
      </Box>
    </Stack>
  );
};

export default Home;

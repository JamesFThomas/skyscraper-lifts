import { Box, Typography } from "@mui/material";
import threeDoors_front from "../../assets/threeDoors_front.mp4";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
        gap: "20px",
        width: "100%",
      }}
    >
      <Typography variant="h4">Welcome To My Building</Typography>
      <video autoPlay muted loop id="homePage-video">
        <source src={threeDoors_front} type="video/mp4" />
      </video>
    </Box>
  );
};

export default Home;

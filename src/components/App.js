// import dependencies
import { Container } from "@mui/material";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import components
import NavBar from "./layout/Navbar.js";
import Home from "./pages/Home.js";
import Auto from "./pages/Auto.js";
import Single from "./pages/Single.js";
import About from "./pages/About.js";

import { aboutData } from "../data/aboutData.js";

const App = () => {
  return (
    <Router>
      <Container
        data-testid="applicationContainer"
        maxWidth={false}
        disableGutters
        sx={{
          height: "100vh",
          backgroundColor: "lightblue",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auto" element={<Auto />} />
          <Route path="/single" element={<Single />} />
          <Route path="/about" element={<About aboutData={aboutData} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

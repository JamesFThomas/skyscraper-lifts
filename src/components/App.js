// import dependencies
import { Container } from "@mui/material";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import components
import NavBar from "./layout/Navbar";
import Home from "./pages/Home";
import Auto from "./pages/Auto";
import Single from "./pages/Single";
import About from "./pages/About";

import { aboutData } from "../data/aboutData";

const App = () => {
  return (
    <Router>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          height: "100vh",
          backgroundColor: "lightblue",
        }}
        fluid
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

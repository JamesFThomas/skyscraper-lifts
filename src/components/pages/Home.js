import Container from "react-bootstrap/Container";
import FloorsPanel from "../lift/FloorPanel";
import DisplayPanel from "../lift/DisplayPanel";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <Container
      style={{
        marginTop: "20px",
      }}
    >
      <div>{"Home"}</div>
      <div
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
      </div>
    </Container>
  );
};

export default Home;

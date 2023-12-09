import Container from "react-bootstrap/Container";
import FloorPanel from "../lift/FloorPanel";
import DisplayPanel from "../lift/DisplayPanel";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="page">
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
          <FloorPanel />
          <DisplayPanel />
        </div>
      </Container>
    </div>
  );
};

export default Home;

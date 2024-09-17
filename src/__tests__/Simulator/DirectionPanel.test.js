import renderer from "react-test-renderer";
import DirectionPanel from "../../components/simulator/liftParts/DirectionPanel";

//TODO add tests for display text

describe("DirectionPanel testing suite", () => {
  it("Component successfully renders", () => {
    const component = renderer.create(
      <DirectionPanel props={{ direction: "DOWN", currentFloor: "28" }} />
    );
    expect(component).toBeTruthy();
  });
});

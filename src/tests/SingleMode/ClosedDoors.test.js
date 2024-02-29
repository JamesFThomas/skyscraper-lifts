import renderer from "react-test-renderer";
import ClosedDoors from "../../components/singleMode/liftParts/ClosedDoors";

//TODO add tests for styling

describe("ClosedDoors testing suite", () => {
  it("Component successfully renders", () => {
    const component = renderer.create(<ClosedDoors />);
    expect(component).toBeTruthy();
  });
});

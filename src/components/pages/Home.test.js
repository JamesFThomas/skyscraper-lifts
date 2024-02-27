import renderer from "react-test-renderer";
import Home from "./Home";

describe("Home page testing suite", () => {
  it("Component successfully renders", () => {
    const component = renderer.create(<Home />);
    expect(component).toBeTruthy();
  });
});

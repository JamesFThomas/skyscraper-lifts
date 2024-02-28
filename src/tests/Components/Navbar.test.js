import renderer from "react-test-renderer";
import NavBar from "../../components/layout/Navbar";

describe("NavBar testing suite", () => {
  it("Component successfully renders", () => {
    const component = renderer.create(<NavBar />);
    expect(component).toBeTruthy();
  });
});

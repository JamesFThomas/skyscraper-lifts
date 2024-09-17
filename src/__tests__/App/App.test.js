import renderer from "react-test-renderer";
import App from "../../components/App";

//TODO add tests for Navbar and routes

describe("App testing suite", () => {
  it("Application container successfully renders", () => {
    const component = renderer.create(<App />);
    expect(component).toBeTruthy();
  });
});

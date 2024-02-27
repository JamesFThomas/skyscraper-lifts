import renderer from "react-test-renderer";
import About from "./About";

describe("About page testing suite", () => {
  it("Component successfully renders", () => {
    const component = renderer.create(
      <About
        aboutData={{
          auto: "auto text",
          single: "single text",
          con1: "con1 text",
          con2: "con2 text",
          con3: "con2 text",
        }}
      />
    );
    expect(component).toBeTruthy();
  });
});

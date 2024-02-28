import renderer from "react-test-renderer";
import TripsDisplay from "../../components/simulator/liftParts/TripsDisplay";

//TODO add tests for display text, and trips array length

describe("TripsDisplay testing suite", () => {
  it("Component successfully renders", () => {
    const component = renderer.create(
      <TripsDisplay
        props={{
          title: "",
          trips: [
            {
              start: "22",
              end: "55",
              duration: 66,
              passengers: 3,
            },
            {
              start: "0",
              end: "89",
              duration: 112,
              passengers: 2,
            },
            {
              start: "12",
              end: "36",
              duration: 29,
              passengers: 1,
            },
          ],
        }}
      />
    );
    expect(component).toBeTruthy();
  });
});

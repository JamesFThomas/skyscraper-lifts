import renderer from "react-test-renderer";
import ElevatorDoors from "../../components/simulator/liftParts/ElevatorDoors";

//TODO add tests for display text

describe("ElevatorDoors testing suite", () => {
  it("Component successfully renders", () => {
    const component = renderer.create(
      <ElevatorDoors
        props={{
          phase: "IDLE",
          currentFloor: "99",
          liftTitle: "Lift 1",
          currentTrip: { start: "22", end: "55", duration: 87, passengers: 4 },
        }}
      />
    );
    expect(component).toBeTruthy();
  });
});

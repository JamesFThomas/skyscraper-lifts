import { renderWithProviders } from "../../utils/TestingWrapper";
import SimulatorDuration from "../../components/simulator/SimulatorDuration";
import { screen } from "@testing-library/react";

//TODO add tests for START && STOP buttons

describe("SimulatorDuration testing suite", () => {
  it("Component successfully renders - search by data-testid", () => {
    renderWithProviders(<SimulatorDuration />);
    expect(screen.getByTestId(/durationDisplayContainer/i)).toBeInTheDocument();
  });
});

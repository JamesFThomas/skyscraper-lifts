import { renderWithProviders } from "../../utils/TestingWrapper";
import SimulatorSummary from "../../components/simulator/SimulatorSummary";
import { screen } from "@testing-library/react";

//TODO add tests for for clear stats button and text display

describe("SimulatorSummary testing suite", () => {
  it("Component successfully renders - search by data-testid", () => {
    renderWithProviders(<SimulatorSummary />);
    expect(screen.getByTestId(/summaryDisplayContainer/i)).toBeInTheDocument();
  });
});

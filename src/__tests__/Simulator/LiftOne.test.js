import { renderWithProviders } from "../../utils/TestingWrapper";
import LiftOne from "../../components/simulator/lifts/LiftOne";
import { screen } from "@testing-library/react";

//TODO add tests for for clear stats button and text display

describe("LiftOne testing suite", () => {
  it("Component successfully renders - search by data-testid", () => {
    renderWithProviders(<LiftOne />);
    expect(screen.getByTestId(/liftOneContainer/i)).toBeInTheDocument();
  });
});

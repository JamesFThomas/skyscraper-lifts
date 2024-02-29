import { renderWithProviders } from "../../utils/TestingWrapper";
import LiftTwo from "../../components/simulator/lifts/LiftTwo";
import { screen } from "@testing-library/react";

//TODO add tests for for clear stats button and text display

describe("LiftTwo testing suite", () => {
  it("Component successfully renders - search by data-testid", () => {
    renderWithProviders(<LiftTwo />);
    expect(screen.getByTestId(/liftTwoContainer/i)).toBeInTheDocument();
  });
});

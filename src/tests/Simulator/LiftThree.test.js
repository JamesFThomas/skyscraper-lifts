import { renderWithProviders } from "../../utils/TestingWrapper";
import LiftThree from "../../components/simulator/lifts/LiftThree";
import { screen } from "@testing-library/react";

//TODO add tests for for clear stats button and text display

describe("LiftThree testing suite", () => {
  it("Component successfully renders - search by data-testid", () => {
    renderWithProviders(<LiftThree />);
    expect(screen.getByTestId(/liftThreeContainer/i)).toBeInTheDocument();
  });
});

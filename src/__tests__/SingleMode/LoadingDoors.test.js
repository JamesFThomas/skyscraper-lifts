import { renderWithProviders } from "../../utils/TestingWrapper";
import LoadingDoors from "../../components/singleMode/liftParts/LoadingDoors";
import { screen } from "@testing-library/react";

//TODO add tests for display text based on LOADING and EXITING state values

describe("LoadingDoors testing suite", () => {
  it("Component successfully renders - search by data-testid", () => {
    renderWithProviders(<LoadingDoors />);
    expect(screen.getByTestId(/loadingDoorsContainer/i)).toBeInTheDocument();
  });
});

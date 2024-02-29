import { renderWithProviders } from "../../utils/TestingWrapper";
import TripLog from "../../components/singleMode/TripLog";
import { screen } from "@testing-library/react";

//TODO add tests for display text based on LOADING and EXITING state values

describe("TripLog testing suite", () => {
  it("Component successfully renders - search by data-testid", () => {
    renderWithProviders(<TripLog />);
    expect(screen.getByTestId(/tripLogContainer/i)).toBeInTheDocument();
  });
});

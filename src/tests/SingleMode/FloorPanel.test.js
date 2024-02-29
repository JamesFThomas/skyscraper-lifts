import { renderWithProviders } from "../../utils/TestingWrapper";
import FloorsPanel from "../../components/singleMode/liftParts/FloorPanel";
import { screen } from "@testing-library/react";

//TODO add tests for floor buttons

describe("FloorsPanel testing suite", () => {
  it("Component successfully renders", () => {
    renderWithProviders(<FloorsPanel />);
    expect(screen.getByTestId(/floorsPanelContainer/i)).toBeTruthy();
  });
});

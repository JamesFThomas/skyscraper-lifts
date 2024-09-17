import renderer from "react-test-renderer";
import { renderWithProviders } from "../../utils/TestingWrapper";
import DisplayPanel from "../../components/singleMode/liftParts/DisplayPanel";
import { screen } from "@testing-library/react";

//TODO add tests for Up and down icons

describe("DisplayPanel testing suite", () => {
  it("Component successfully renders", () => {
    renderWithProviders(<DisplayPanel />);
    expect(screen.getByTestId(/displayPanelContainer/i)).toBeInTheDocument();
  });
});

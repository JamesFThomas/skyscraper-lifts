import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/TestingWrapper";
import Single from "../../components/pages/Single";

describe("Single page testing suite", () => {
  it("Component successfully renders - find display text", async () => {
    renderWithProviders(<Single />);
    expect(
      screen.getByText(
        /Door takes 30 seconds in the Lobby, 5 seconds other floors./i
      )
    ).toBeInTheDocument();
  });
});

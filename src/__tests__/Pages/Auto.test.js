import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/TestingWrapper";
import Auto from "../../components/pages/Auto";

describe("Auto page testing suite", () => {
  it("Component successfully renders", () => {
    renderWithProviders(<Auto />);
    expect(screen.getByRole("button", { name: /Start/i })).toBeInTheDocument();
  });
});

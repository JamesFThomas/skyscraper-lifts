import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/TestingWrapper";
import CallPanel from "../../components/pages/Auto";

describe("CallPanel component testing suite", () => {
  it("Component successfully renders", () => {
    renderWithProviders(<CallPanel />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

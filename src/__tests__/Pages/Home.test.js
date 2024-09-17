import { render, screen } from "@testing-library/react";
import Home from "../../components/pages/Home";

describe("Home page testing suite", () => {
  it("Component renders with page title", () => {
    render(<Home />);

    const result = screen.getByRole("heading");

    expect(result).toHaveTextContent(/Welcome To My Building/i);
  });
});

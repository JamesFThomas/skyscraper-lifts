import { render, screen } from "@testing-library/react";
import ButtonDialog from "../../components/layout/ButtonDialog";

describe("ButtonDialog testing suite", () => {
  // Happy Path
  it("ButtonDialog successfully renders with title button", () => {
    render(
      <ButtonDialog
        data={{ id: "", Title: "button test", Desc: "", List: "" }}
      />
    );

    const component = screen.getByTestId("titleButton");

    expect(component).toBeTruthy();

    expect(component).toHaveTextContent("button test");
  });

  // Sad Path
  it("ButtonDialog does NOT render close button when closed", () => {
    render(<ButtonDialog data={{ id: "", Title: "", Desc: "", List: "" }} />);

    const closeButton = screen.queryByTestId(/closeButton/i);

    expect(closeButton).toBeNull();
  });
});

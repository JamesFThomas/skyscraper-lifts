import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ButtonDialog from "../../components/layout/ButtonDialog";

const List = [
  "There are 3 elevator shafts.",
  "The destination floor is known at the time of the elevator call.",
  "There is a lobby on the 1st floor.",
  "It takes 1 second for the elevator to move 1 floor.",
  "It takes 30 secs in lobby/5 seconds on any other floor to pick-up/drop-off passenger.",
  "A maximum of 10 people can fit into the elevator car at any one time.",
];

describe("ButtonDialog testing suite", () => {
  // Happy Path
  it("ButtonDialog successfully renders with title button", () => {
    render(
      <ButtonDialog
        data={{ id: "", Title: "button test", Desc: "", List: "" }}
      />,
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

  it("ButtonDialog opens when title button clicked", async () => {
    render(
      <ButtonDialog
        data={{ id: "", Title: "Open", Desc: "This Dialog is open", List: "" }}
      />,
    );

    const openButton = screen.getByTestId("titleButton");

    fireEvent.click(openButton);

    await waitFor(() => {
      screen.getByTestId("dialogDescription");
    });

    const description = screen.getByTestId("dialogDescription");

    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();

    expect(description).toBeTruthy();
    expect(description).toHaveTextContent("This Dialog is open");
  });

  it("ButtonDialog opens to display list when data provided", async () => {
    render(
      <ButtonDialog data={{ id: "", Title: "Open", Desc: "", List: List }} />,
    );

    const openButton = screen.getByTestId("titleButton");

    fireEvent.click(openButton);

    await waitFor(() => {
      screen.getByTestId("listContainer");
    });

    const list = screen.getByTestId("listContainer");

    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();

    expect(list).toBeTruthy();
  });
});

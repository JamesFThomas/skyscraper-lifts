import renderer from "react-test-renderer";
import ModalComponent from "../../components/layout/ModalComponent";

//TODO add tests for display text and button click

describe("ModalComponent testing suite", () => {
  it("Component successfully renders", () => {
    const component = renderer.create(
      <ModalComponent data={{ id: "", Title: "", Desc: "", List: "" }} />
    );
    expect(component).toBeTruthy();
  });
});

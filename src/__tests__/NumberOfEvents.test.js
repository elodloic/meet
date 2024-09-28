import NumberOfEvents from "../components/NumberOfEvents";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<NumberOfEvents /> Component", () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
  });
  test("Render input numbox", () => {
    const input = NumberOfEventsComponent.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });

  test("Numbox default value is 32", () => {
    const input = NumberOfEventsComponent.getByRole("spinbutton");
    expect(input).toHaveValue(32);
  });
  test("Numbox value updates after new input", async () => {
    const input = NumberOfEventsComponent.getByRole("spinbutton");
    const user = userEvent.setup();
    await user.type(input, "{backspace}{backspace}10");
    expect(input).toHaveValue(10);
  });
});

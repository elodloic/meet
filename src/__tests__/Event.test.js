import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { mockData } from "../mock-data";
import { render } from "@testing-library/react";

const event = mockData[0];

describe("<Event /> component", () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={event} />);
  });

  test("Render event title", () => {
    expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
  });

  test("Render event location", () => {
    expect(
      EventComponent.queryByText(mockData[0].location)
    ).toBeInTheDocument();
  });

  test("Render event start time", () => {
    expect(EventComponent.queryByText(mockData[0].created)).toBeInTheDocument();
  });

  test("Render event details button", () => {
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
  });

  test("Event details hidden by default", () => {
    const eventDetails =
      EventComponent.container.querySelector(".eventDetails");
    expect(eventDetails).not.toBeInTheDocument();
  });

  test("Event details rendered when user clicks on show details button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText("Show Details");
    await user.click(button);
    const details = EventComponent.container.querySelector(".eventDetails");
    expect(details).toBeInTheDocument();
  });

  test("Event details hidden when user clicks on hide details button", async () => {
    const user = userEvent.setup();
    let button = EventComponent.queryByText("Show Details");
    await user.click(button);
    let details = EventComponent.container.querySelector(".eventDetails");
    expect(details).toBeInTheDocument();

    button = EventComponent.queryByText("Hide Details");
    await user.click(button);
    details = EventComponent.container.querySelector(".eventDetails");
    expect(details).not.toBeInTheDocument();
  });
});

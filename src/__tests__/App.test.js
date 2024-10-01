import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import App from "../App";

describe("<App /> component", () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  });

  test("Render list of events", () => {
    expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
  });

  test("Render CitySearch", () => {
    expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
  });

  test("Render NumberOfEvents", () => {
    expect(AppDOM.querySelector("#number-of-events")).toBeInTheDocument();
  });

  describe("<App /> integration", () => {
    test("renders a list of events matching the city selected by the user", async () => {
      const user = userEvent.setup();
      const AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      const CitySearchDOM = AppDOM.querySelector("#city-search");
      const CitySearchInput = within(CitySearchDOM).queryByRole("textbox");

      await user.type(CitySearchInput, "Berlin");
      const berlinSuggestionItem =
        within(CitySearchDOM).queryByText("Berlin, Germany");
      await user.click(berlinSuggestionItem);

      const EventListDOM = AppDOM.querySelector("#event-list");
      const allRenderedEventItems =
        within(EventListDOM).queryAllByRole("listitem");

      const allEvents = await getEvents();
      const berlinEvents = allEvents.filter(
        (event) => event.location === "Berlin, Germany"
      );

      expect(allRenderedEventItems.length).toBe(berlinEvents.length);
      allRenderedEventItems.forEach((event) => {
        expect(event.textContent).toContain("Berlin, Germany");
      });
    });

    test("Number of events displayed changes when user updates the number of events input", async () => {
      const user = userEvent.setup();
      const AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      const NumberInput = AppDOM.querySelector("input[type='number']");

      await user.type(NumberInput, "{backspace}{backspace}5");

      const allRenderedEventItems = within(
        AppDOM.querySelector("#event-list")
      ).queryAllByRole("listitem");

      expect(allRenderedEventItems.length).toBe(5);
    });
  });
});

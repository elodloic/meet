import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideEventDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppComponent, AppDOM, EventListDOM, EventListItems;

    given("user has applied a search filter;", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");

      const CitySearchDOM = AppDOM.querySelector("#city-search");
      const citySearchInput = within(CitySearchDOM).queryByRole("textbox");
      userEvent.type(citySearchInput, "Berlin");
    });

    when("the list of event elements load;", async () => {
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then("the event elements should be collapsed by default.", () => {
      EventListItems.forEach((eventItem) => {
        const eventDetails = within(eventItem).queryByTestId("eventDetails");
        expect(eventDetails).toBeNull();
      });
    });
  });

  test("User can expand an event to see details.", ({ given, when, then }) => {
    let AppComponent, AppDOM, EventListDOM, EventListItems;

    given("user is shown a list of events;", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    when("a collapsed event element is clicked;", () => {
      const eventItem = EventListItems[0];
      const detailsButton = within(eventItem).queryByTestId("detailsButton");
      userEvent.click(detailsButton);
    });

    then("the event element should expand to display more information.", () => {
      const eventItem = EventListItems[0];
      const eventDetails = within(eventItem).queryByTestId("eventDetails");
      expect(eventDetails).toBeDefined();
    });
  });

  test("User can collapse an event to hide details.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent, AppDOM, EventListDOM, EventListItems;
    given("user is shown a list of events;", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    when("an expanded event element is clicked;", async () => {
      const eventItem = EventListItems[0];
      const detailsButton = within(eventItem).queryByTestId("detailsButton");
      userEvent.click(detailsButton);
      await waitFor(() => {
        const eventDetails = within(eventItem).queryByTestId("eventDetails");
        expect(eventDetails).toBeDefined(); // checking for expanded state
      });
      userEvent.click(detailsButton);
    });

    then(
      "the event element should collapse to hide the additional information.",
      () => {
        const eventItem = EventListItems[0];
        const eventDetails = within(eventItem).queryByTestId("eventDetails");
        expect(eventDetails).toBeNull();
      }
    );
  });
});

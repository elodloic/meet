import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

const feature = loadFeature("./src/features/numberOfEvents.feature");

defineFeature(feature, (test) => {
  test("user hasn’t specified a number, 32 events are shown by default.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent, AppDOM, EventListDOM, EventListItems, NumberOfEvents;
    given("user is shown multiple events at the same time;", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
      NumberOfEvents = within(AppDOM).getByRole("spinbutton");
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });

    when("user hasn’t specified a number;", () => {
      expect(NumberOfEvents).toHaveValue(32);
    });

    then("32 events are shown simultaneously by default.", () => {
      expect(EventListItems.length).toBe(32);
    });
  });

  test("User can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent, AppDOM, EventListDOM, EventListItems, NumberOfEvents;
    given("user is shown multiple events at the same time;", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
      NumberOfEvents = within(AppDOM).getByRole("spinbutton");
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });

    when("user has specified a number;", async () => {
      const user = userEvent.setup();
      await user.type(NumberOfEvents, "{backspace}{backspace}10");
      expect(NumberOfEvents).toHaveValue(10);
    });

    then(
      "the specified amount of events are shown simultaneously.",
      async () => {
        await waitFor(() => {
          EventListItems = within(EventListDOM).queryAllByRole("listitem");
          expect(EventListItems.length).toBe(10);
        });
      }
    );
  });
});

import { render } from "@testing-library/react";
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
});

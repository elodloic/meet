Feature: Show/Hide Event Details

    Scenario: An event element is collapsed by default.
        Given user has applied a search filter;
        When the list of event elements load;
        Then the event elements should be collapsed by default.

    Scenario: User can expand an event to see details.
        Given user is shown a list of events;
        When a collapsed event element is clicked;
        Then the event element should expand to display more information.

    Scenario: User can collapse an event to hide details.
        Given user is shown a list of events;
        When an expanded event element is clicked;
        Then the event element should collapse to hide the additional information.
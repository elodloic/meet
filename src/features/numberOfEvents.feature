Feature: Specify Number of Events Displayed

    Scenario: User hasn’t specified a number, 32 events are shown by default.
        Given user is shown multiple events at the same time;
        When user hasn’t specified a number;
        Then 32 events are shown simultaneously by default.

    Scenario: User can change the number of events displayed.
        Given user is shown multiple events at the same time;
        When user has specified a number;
        Then the specified amount of events are shown simultaneously.
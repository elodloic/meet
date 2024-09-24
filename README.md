# **Meet App**

### A web app leveraging the Google Calendar API to show, filter and sort upcoming events based on specific topics and location.

## **Features, user stories, and scenarios:**

---

### **Feature 1: Filter Events By City**

#### **Scenario 1:**

**When** user hasn’t searched for a city, show upcoming events from all cities.

- **Given** user hasn’t searched for any city;
- **When** the user opens the app;
- **Then** the user should see a list of upcoming events.

#### **Scenario 2:**

**User should see a list of suggestions when they search for a city.**

- **Given** the main page is open;
- **When** user starts typing in the city textbox;
- **Then** the user should receive a list of cities (suggestions) that match what they’ve typed.

#### **Scenario 3:**

**User can select a city from the suggested list.**

- **Given** user was typing “Berlin” in the city textbox **AND** the list of suggested cities is showing;
- **When** the user selects a city (e.g., “Berlin, Germany”) from the list;
- **Then** their city should be changed to that city (i.e., “Berlin, Germany”) **AND** the user should receive a list of upcoming events in that city.

---

### **Feature 2: Show/Hide Event Details**

#### **Scenario 1:**

**An event element is collapsed by default.**

- **Given** user has applied a search filter;
- **When** the list of event elements load;
- **Then** the event elements should be collapsed by default.

#### **Scenario 2:**

**User can expand an event to see details.**

- **Given** user is shown a list of events;
- **When** a collapsed event element is clicked;
- **Then** the event element should expand to display more information.

#### **Scenario 3:**

**User can collapse an event to hide details.**

- **Given** user is shown a list of events;
- **When** an expanded event element is clicked;
- **Then** the event element should collapse to hide the additional information.

---

### **Feature 3: Specify Number of Events Displayed**

#### **Scenario 1:**

**When** user hasn’t specified a number, 32 events are shown by default.

- **Given** user is shown multiple events at the same time;
- **When** user hasn’t specified a number;
- **Then** 32 events are shown simultaneously by default.

#### **Scenario 2:**

**User can change the number of events displayed.**

- **Given** user is shown multiple events at the same time;
- **When** user has specified a number;
- **Then** the specified amount of events are shown simultaneously.

---

### **Feature 4: Use the App When Offline**

#### **Scenario 1:**

**Show cached data when there’s no internet connection.**

- **Given** user is shown multiple events at the same time;
- **When** user has lost their internet connection;
- **Then** cached data is shown.

#### **Scenario 2:**

**Show error when user changes search settings (city, number of events).**

- **Given** user is changing search settings;
- **When** user has lost internet connection;
- **Then** show network error message.

---

### **Feature 5: Add an App Shortcut to the Home Screen**

#### **Scenario 1:**

**User can install the meet app as a shortcut on their device home screen.**

- **Given** user requests an app shortcut;
- **When** the OS prompt is confirmed;
- **Then** app shortcut gets installed on the homescreen/desktop.

---

### **Feature 6: Display Charts Visualizing Event Details**

#### **Scenario 1:**

**Show a chart with the number of upcoming events in each city.**

- **Given** user is on the homepage;
- **When** the chart loads;
- **Then** visualize the number of upcoming events in each city.

---

import { useState } from "react";

const Event = ({ event: { summary, location, created, description } }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li>
      <div className="eventSummary">
        <h2>{summary}</h2>
        <p>{location}</p>
        <p>{created}</p>
      </div>
      {showDetails ? (
        <div className="eventDetails">
          <p>{description}</p>
        </div>
      ) : null}
      <button
        className="detailsButton"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </li>
  );
};

export default Event;

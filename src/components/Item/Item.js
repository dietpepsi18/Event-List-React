import React, { useState } from "react";
import EditEvent from "../EditEvent/EditEvent";

export default function Item(props) {
  const [isEditing, setIsEditing] = useState(false);
  const { eventName, startDate, endDate, id } = props;
  const { handleEvent } = props;

  if (isEditing === true) {
    return <EditEvent setIsEditing={setIsEditing} {...props} />;
  } else {
    return (
      <tr className="event-list__item">
        <th className="event-list__event">{eventName}</th>
        <th className="event-list__start">{startDate}</th>
        <th className="event-list__end">{endDate}</th>
        <th className="event-list__actions">
          <div className="event-list__edit" onClick={() => setIsEditing(true)}>
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="EditIcon"
              aria-label="fontSize small"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
            </svg>
          </div>
          <div
            className="event-list__delete"
            onClick={() => handleEvent.deleteEvent(id)}
          >
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="DeleteIcon"
              aria-label="fontSize small"
            >
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
            </svg>
          </div>
        </th>
      </tr>
    );
  }
}
